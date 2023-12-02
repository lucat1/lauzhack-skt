from flask import Flask

from skt.token import get_token

app = Flask(__name__)

@app.route("/")
def hello_world():
    token = get_token();
    print(token)
    return token
