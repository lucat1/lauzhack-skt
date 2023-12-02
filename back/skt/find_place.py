from typing import Dict, List
from skt.token import token_header
import requests

from skt.const import JOURNEY_API, place

def find_place(name: str, limit: int = 10) -> List[Dict]:
    params = {
        "nameMatch": name,
        "limit": limit
    }
    res = requests.get(f"{JOURNEY_API}/v3/stop-places", params=params, headers=token_header()).json()
    places = res["stopPlaces"]
    return list(map(place, places))
