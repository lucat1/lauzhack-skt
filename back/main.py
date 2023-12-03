from datetime import datetime
from flask import Flask, request
from flask_cors import CORS

from skt.find_place import find_place
from skt.plan import plan
from skt.range import find_in_range
from skt.route_auto import get_all_routes

app = Flask(__name__)
CORS(app)

@app.route("/suggestion", methods=["POST"])
def suggestion():
    if "limit" in request.json:
        return find_place(request.json["name"], request.json["limit"])
    else:
        return find_place(request.json["name"])

@app.route("/plan", methods=["POST"])
def p():
    # {"origin": [0,0]} coordinate
    # {"origin": "id"} stop id
    if isinstance(request.json["origin"], str): # an id
        return plan(request.json["origin"], request.json["destination"], request.json["time"])
    else:
        lat, long = request.json["origin"][1], request.json["origin"][0]
        parkings = find_in_range(lat, long, 4.0) # TODO: change range
        routes = []
        for parking in parkings[:10]: # TODO: Change
            to_the_parking = get_all_routes(lat, long, parking["position"]["lat"], parking["position"]["long"])
            sbb = plan(parking["position"]["place"], request.json["destination"], datetime.today()) # TODO: plus time the to the parking takes
            routes.append([to_the_parking, sbb]) # TODO: merge route

        return {
            "parkings": parkings,
            "routes": routes
        }
    

if __name__ == "__main__":
    # print(find_close(47.3769, 8.5417, 100))
    # p1 = find_place("Zurich HB")
    # p2 = find_place("Basel")
    # print(plan(p1[0]["id"], p2[0]["id"], datetime.today()))
    app.run()
