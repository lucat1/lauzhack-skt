import json

data = None

with open("mobilitat.json", 'r') as file:
    data = json.load(file)

print(data[0])