from flask import Flask, request

from skt.find_place import find_place
from skt.token import get_token

app = Flask(__name__)

@app.route("/search", methods=["POST"])
def hello_world():
    if "limit" in request.json:
        return find_place(request.json["name"], request.json["limit"])
    else:
        return find_place(request.json["name"])

if __name__ == "__main__":
    app.run()
