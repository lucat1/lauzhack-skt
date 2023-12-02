from time import time
from typing import Dict, Optional, Tuple
import requests

API_URL = "https://journey-service-int.api.sbb.ch"
CLIENT_SECRET = "MU48Q~IuD6Iawz3QfvkmMiKHtfXBf-ffKoKTJdt5"
CLIENT_ID = "f132a280-1571-4137-86d7-201641098ce8"
SCOPE = "c11fa6b1-edab-4554-a43d-8ab71b016325/.default"

def now_time() -> int:
    return round(time() * 1000)

mt: Optional[Tuple[int, str]] = None
def get_token() -> str:
    global mt
    if not(mt is None) and mt[0] > now_time():
        return mt[1]

    params = {
        "grant_type": "client_credentials",
        "scope": SCOPE,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET
    }
    res = requests.post("https://login.microsoftonline.com/2cda5d11-f0ac-46b3-967d-af1b2e1bd01a/oauth2/v2.0/token", data=params).json()
    token = res["access_token"]
    mt = (now_time() + res["expires_in"], token)
    return token

def token_header() -> Dict:
    token = get_token()
    return {
        "Authorization": f"Bearer {token}"
    }
