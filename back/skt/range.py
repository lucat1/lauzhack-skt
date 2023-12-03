from typing import List, Dict, Tuple
import json
from skt.geohelper import haversine


mobilitat_data = None
with open("data/mobilitat.json", 'r') as file:
    mobilitat_data = json.load(file)

def to_station(d: Dict) -> Dict:
    return {
        "place": d["bpuic"],
        "lat": d["geopos"]["lat"],
        "long": d["geopos"]["lon"]
    }
    
def find_in_range(lat: float, long: float, radius_km: float) -> List[Dict]:
    res = []
    for station in mobilitat_data:
        mypos = station.get("geopos")
        distance = haversine(mypos.get("lat"), mypos.get("lon"), lat, long)
        if distance < radius_km:
            res.append({ "distance": distance, "position": to_station(station)})

    return res
