import requests

la1 = 6.566561505148001
lo1 = 46.518659400000004
la = 6.393247037248148
lo = 46.361350200000004

travel_kind = ["routed-car", "routed-foot", "routed-bike"]

def get_route_to_station(method, start_lat, start_lon, end_lat, end_lot):
    url = f"https://routing.openstreetmap.de/{method}/route/v1/driving/{start_lat},{start_lon};{end_lat},{end_lot}?steps=true"
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Error: {response.status_code}")

    data = response.json() 
    res = {
        "duration": data["routes"][0]["duration"],
        "distance": data["routes"][0]["distance"],
    }
    return res


for kind in travel_kind:
    print(get_route_to_station(kind, la1, lo1, la, lo))


