import json
import geohelper


class PandR:
    def __init__(self):
        with open("data/mobilitat.json", 'r') as file:
            self.data = json.load(file)
    
    def is_in_range(self, pos: dict[float, float], radius_km: float) -> float :
        res = []
        for station in self.data:
            mypos = station["geopos"]
            distance = geohelper.haversine(mypos["lat"], mypos["lon"], pos["lat"], pos["lon"])
            if distance < radius_km:
                print(distance, station)
                res.append(station)

        return res
        

    def __getitem__(self, key):
        return self.data[key]


#print(data[5]["geopos"])

#data = PandR()
#print(data[5])
#print(len(data.is_in_range({'lon': 7.589562790156525, 'lat': 47.5474120550501}, 1)))