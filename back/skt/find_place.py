from typing import Dict, List
from skt.token import token_header
from json import dumps
import requests

JOURNEY_API = "https://journey-service-int.api.sbb.ch"

def place(d: Dict) -> Dict:
    return {
        "id": d["id"],
        "name":d["name"],
        "canton": d["canton"]
    }

def find_place(name: str, limit: int = 10) -> List[Dict]:
    params = {
        "nameMatch": name,
        "limit": limit
    }
    res = requests.get(f"{JOURNEY_API}/v3/stop-places", params=params, headers=token_header()).json()
    places = res["stopPlaces"]
    return list(map(place, places))
