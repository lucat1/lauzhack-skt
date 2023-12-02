import aiohttp
import asyncio
import uuid

travel_kind = ["routed-car", "routed-foot", "routed-bike"]

async def get_route_to_station(session, method, start_lat, start_lon, end_lat, end_lot):
    url = f"https://routing.openstreetmap.de/{method}/route/v1/driving/{start_lat},{start_lon};{end_lat},{end_lot}?steps=true"
    response = await session.request('GET', url=url)

    data = await response.json() 
    res = {
        "id": uuid.uuid4().hex,
        "duration": data["routes"][0]["duration"],
        "distance": data["routes"][0]["distance"],
        "legs": None
    }
    return res


async def get_all_routes_async(start, end):
    la0 = start.get("lat")
    lo0 = start.get("lon")
    la1 = start.get("lat")
    lo1 = start.get("lon")
    tasks = []

    async with aiohttp.ClientSession() as session:
        for kind in travel_kind:
            tasks.append(get_route_to_station(session, kind, la1, lo1, la, lo))
        results = await asyncio.gather(*tasks, return_exceptions=True)
    
    return results

def get_all_routes(start, end):
    return asyncio.run(get_all_routes_async(start, end))



la1 = 6.566561505148001
lo1 = 46.518659400000004
la = 6.393247037248148
lo = 46.361350200000004
start = {"lat": 6.566561505148001, "lon": 46.518659400000004}
end = {"lat": 6.393247037248148, "lon": 46.361350200000004}
print(get_all_routes(start, end))

