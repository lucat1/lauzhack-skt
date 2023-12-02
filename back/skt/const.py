from typing import Dict

JOURNEY_API = "https://journey-service-int.api.sbb.ch"

def place(d: Dict) -> Dict:
    return {
        "id": d["id"],
        "name":d["name"],
        "canton": d.get("canton", None),
        "lat": d["centroid"]["coordinates"][1],
        "long": d["centroid"]["coordinates"][0]
    }

