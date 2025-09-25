from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/recommend", methods=["POST"])
def recommend():
    return jsonify({"matches": []})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
