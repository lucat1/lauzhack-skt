from typing import Dict, List
from datetime import datetime
from isodate import parse_duration
from skt.get_token import token_header
import requests

from skt.const import JOURNEY_API, place

def to_point(t: Dict) -> Dict:
    res = {
        "place": place(t["place"]),
    }
    if "departure" in t:
        quay = t["departure"].get("quayRt", None)
        res["departure"] = {
            "time": t["departure"]["timeAimed"],
            "quay": quay["name"] if quay is not None else None,
        } 
    return res

def to_step(t: Dict) -> Dict:
    return {
        "place": place(t["place"]),
        "time": t["timeAimed"],
    }

def to_leg(t: Dict) -> Dict:
    if t["mode"] == "TRAIN" or t["mode"] == "BUS":
        return {
            "mode": t["mode"],
            "duration": parse_duration(t["duration"]).total_seconds(),
            "points": list(map(to_point, t["serviceJourney"]["stopPoints"])) if "serviceJourney" in t else []
        }
    elif t["mode"] == "FOOT":
        return {
            "mode": t["mode"],
            "start": to_step(t["start"]),
            "end": to_step(t["end"])
        }
    else:
        raise ValueError(f"Unhandleled leg mode: {t['mode']}")

def to_trip(t: Dict) -> Dict:
    return {
        "id": t["id"],
        "legs": list(map(to_leg, t["legs"]))
    }

# origin can be either a stop id or a coordinate
# destination can be either a stop id or a coordinate
def plan(origin: str, destination: str, time: datetime) -> List[Dict]:
    body = {
        "origin": origin,
        "destination": destination,
        "date": time.strftime("%Y-%m-%d"),
        "time": time.strftime("%H:%M"),
    }
    res = requests.post(f"{JOURNEY_API}/v3/trips/by-origin-destination", json=body, headers=token_header()).json()
    if "trips" not in res:
        print(res)
    trips = res["trips"]
    # TODO: pagination
    # pagination = res["paginationCursor"]
    # print(json.dumps(trips[0]["legs"][0]))
    return list(map(to_trip, trips))
