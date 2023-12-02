from flask import Flask, request
from datetime import datetime

from skt.find_place import find_place
from skt.find_close import find_close
from skt.plan import plan

app = Flask(__name__)

@app.route("/search", methods=["POST"])
def hello_world():
    if "limit" in request.json:
        return find_place(request.json["name"], request.json["limit"])
    else:
        return find_place(request.json["name"])

if __name__ == "__main__":
    # print(find_close(47.3769, 8.5417, 100))
    p1 = find_place("Zurich HB")
    p2 = find_place("Basel")
    print(plan(p1[0]["id"], p2[0]["id"], datetime.today()))
    # app.run()
