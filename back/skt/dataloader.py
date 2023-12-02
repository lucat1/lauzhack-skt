import json
import geohelper


class PandR:
    def __init__(self):
        with open("data/mobilitat.json", 'r') as file:
            self.data = json.load(file)
    
    def is_in_range(self, pos: dict[float, float], radius_km: float) -> float :
        res = []
        for station in self.data:
            mypos = station.get("geopos")
            distance = geohelper.haversine(mypos.get("lat"), mypos.get("lon"), pos.get("lat"), pos.get("lon"))
            if distance < radius_km:
                print(distance, station)
                res.append(station)

        return res
        

    def __getitem__(self, key):
        return self.data[key]

#data = PandR()
