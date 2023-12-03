from datetime import datetime, timedelta
from dateutil import parser
from typing import Union, Tuple, List, Dict
import aiohttp
import asyncio

from skt.range import find_in_range
from skt.route_auto import get_all_routes_async
from skt.plan import plan_async

async def fetch_whole_route(session, lat: float, long: float, parking: Dict, dest: str, time: datetime) -> List[Dict]:
    routes = []
    to_the_parking = await get_all_routes_async(session, lat, long, parking["position"]["lat"], parking["position"]["long"])
    pp = parking["position"]["place"]
    place = str(pp) if isinstance(pp, int) else pp
    for route_to_parking in to_the_parking:
        time_after_parking = parser.parse(time) + timedelta(seconds=route_to_parking["legs"][0]["duration"])
        time_to_depart = parser.parse(time) - timedelta(seconds=route_to_parking["legs"][0]["duration"])
        route_to_parking["legs"][0]["points"][0]["departure"] = {"time": time_to_depart}
        sbbs = await plan_async(session, place, str(dest), time_after_parking)

        for sbb in sbbs:
            if route_to_parking["legs"][0]["distance"] <= 0.0:
                routes.append(sbb)
            else:
                routes.append(join_trips(route_to_parking, sbb))
    return routes

def join_trips(a: Dict, b: Dict) -> Dict:
    return {
        "id": b["id"],
        "legs": a["legs"] + b["legs"]
    }

async def full_async(origin: Union[str, Tuple[float, float]], destination: str, time: datetime) -> List[Dict]:
    # {"origin": [0,0]} coordinate
    # {"origin": "id"} stop id
    if isinstance(origin, str): # an id
        async with aiohttp.ClientSession() as session:
            print("plan_async2", origin)
            return await plan_async(session, origin, destination, time)
    else:
        long, lat = origin[0], origin[1]
        parkings = find_in_range(lat, long, 4.0) # TODO: change range
        routes = []
        session = aiohttp.ClientSession()
        for parking in parkings[:4]:
            routes.append(fetch_whole_route(session, lat, long, parking, destination, time))
        res = await asyncio.gather(*routes, return_exceptions=True)
        await session.close()
        # raise res[0]
        routes = [item for sublist in res for item in sublist]
        return routes

def full(origin: Union[str, Tuple[float, float]], destination: str, time: datetime) -> List[Dict]:
    return asyncio.run(full_async(origin, destination, time))

def calc_total_time(route):
    ttime = 0
    for legs in route["legs"]:
        if legs.get("duration") is None:
            continue
        ttime += legs["duration"]
    
    return ttime

def calc_weight(route, time):
    last_mode = route["legs"][-1]["mode"]
    # if last_mode == "FOOT":
    #     print(route["legs"][-1]["end"]["place"]["time"])
    #     end_time = route["legs"][-1]["end"]["place"]["time"]
    # else:
    #     print(route["legs"][-1])
    #     end_time = route["legs"][-1]["points"][-1]["place"]["arrival"]["time"]
    delta_wait = abs((parser.parse(time) - parser.parse(route["legs"][0]["points"][0]["departure"]["time"])).total_seconds())
    total_time = route["total_duration"]
    delta_time = (timedelta(seconds=total_time) + timedelta(seconds=delta_wait)).total_seconds()
    total_changes = len(route["legs"])
    eco_impact = route["eco_impact"] 
    rank = delta_time + pow(4, total_changes) + 0*eco_impact
    #print(rank)
    return rank, delta_time

def rank(origin: Union[str, Tuple[float, float]], destination: str, time: datetime) -> List[Dict]:
    all_routes_with_double = full(origin, destination, time)
    all_routes = []
    used_time = []
    #print(calc_total_time(all_routes[0]))

    for route in all_routes_with_double:
        myttime = calc_total_time(route)
        if myttime in used_time:
           continue
    
        used_time.append(myttime)
        route["total_duration"] = myttime
        route["eco_impact"] = 0

        all_routes.append(route)
    
    for route in all_routes:
        rank, ttime = calc_weight(route, time)
        route["rank_weight"] = rank
        route["total_duration"] = ttime
    
    all_routes = sorted(all_routes, key=lambda d: d['rank_weight'])

    return all_routes