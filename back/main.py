from flask import Flask, request
from typing import Dict
from flask_cors import CORS

from skt.find_place import find_place
from skt.full import full, rank

app = Flask(__name__)
CORS(app)

@app.route("/suggestion", methods=["POST"])
def suggestion():
    if "limit" in request.json:
        return find_place(request.json["name"], request.json["limit"])
    else:
        return find_place(request.json["name"])

@app.route("/plan", methods=["POST"])
def plan():
    return full(request.json["origin"], request.json["destination"], request.json["time"])

@app.route("/plan/ranked", methods=["POST"])
def plan_ranked():
    return rank(request.json["origin"], request.json["destination"], request.json["time"])


if __name__ == "__main__":
    # print(find_close(47.3769, 8.5417, 100))
    # p1 = find_place("Zurich HB")
    # p2 = find_place("Basel")
    # print(plan(p1[0]["id"], p2[0]["id"], datetime.today()))
    app.run()
