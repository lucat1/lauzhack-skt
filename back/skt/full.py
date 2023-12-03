from datetime import datetime
from typing import Union, Tuple, List, Dict
import aiohttp
from json import dumps
import asyncio

from skt.range import find_in_range
from skt.route_auto import get_all_routes_async
from skt.plan import plan_async

async def fetch_whole_route(session, lat: float, long: float, parking: Dict, dest: str) -> List[Dict]:
    routes = []
    to_the_parking = await get_all_routes_async(session, lat, long, parking["position"]["lat"], parking["position"]["long"])
    sbbs = await plan_async(session, parking["position"]["place"], dumps(dest), datetime.today()) # TODO: plus time the to the parking takes
    for route_to_parking in to_the_parking:
        for sbb in sbbs:
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
            return await plan_async(origin, destination, time)
    else:
        long, lat = origin[0], origin[1]
        parkings = find_in_range(lat, long, 4.0) # TODO: change range
        routes = []
        session = aiohttp.ClientSession()
        for parking in parkings[:4]:
            routes.append(fetch_whole_route(session, lat, long, parking, destination))
        res = await asyncio.gather(*routes, return_exceptions=True)
        await session.close()
        #raise res[0]
        routes = [item for sublist in res for item in sublist]
        return routes

def full(origin: Union[str, Tuple[float, float]], destination: str, time: datetime) -> List[Dict]:
    return asyncio.run(full_async(origin, destination, time))
