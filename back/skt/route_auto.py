import aiohttp
import asyncio
import uuid

travel_kind = ["routed-car", "routed-foot", "routed-bike"]

async def get_route_to_station(session, method, start_lat, start_lon, end_lat, end_lot):
    url = f"https://routing.openstreetmap.de/{method}/route/v1/driving/{start_lat},{start_lon};{end_lat},{end_lot}?steps=true"
    response = await session.request('GET', url=url)
    data = await response.json() 

    res = convert_sbb(data, method)

    return res


async def get_all_routes_async(session, la0, lo0, la1, lo1):
    tasks = []

    for kind in travel_kind:
        tasks.append(get_route_to_station(session, kind, la0, lo0, la1, lo1))
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    return results

def convert_sbb(t, method): 
    mode = "FOOT"
    if method == "routed-car":
        mode = "CAR"
    if method == "routed-bike":
        mode = "BIKE"

    res = {
        "id": uuid.uuid4().hex,
        "legs": [
            {
                "mode": mode,
                "duration": t["routes"][0]["duration"],
                "distance": t["routes"][0]["distance"],
                "points": convert_steps(t["routes"][0]["legs"][0]["steps"])
            }
        ]
    }

    return res


def convert_steps(s):
    result = []
    #print(s)
    for step in s:
        result.append({
            "place": { 
                "id": uuid.uuid4().hex,
                "name": "-",
                "canton": uuid.uuid4().hex,
                "lat": step["maneuver"]["location"][0],
                "long": step["maneuver"]["location"][1],
            }
        })
    
    return result
        
# la1 = 6.566561505148001
# lo1 = 46.518659400000004
# la = 6.393247037248148
# lo = 46.361350200000004
# start = {"lat": 6.566561505148001, "lon": 46.518659400000004}
# end = {"lat": 6.393247037248148, "lon": 46.361350200000004}
# print(get_all_routes(start, end))
