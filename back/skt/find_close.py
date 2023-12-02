from typing import Dict, List
from skt.get_token import token_header
import requests

from skt.const import JOURNEY_API, place

def find_close(lat: float, long: float, radius: int) -> List[Dict]:
    params = {
        "latitude": lat,
        "longitude": long,
        "radius": radius
    }
    res = requests.get(f"{JOURNEY_API}/v3/places/by-coordinates", params=params, headers=token_header()).json()
    places = res["places"]
    return list(map(place, places))
