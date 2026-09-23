from flask import Flask, request, jsonify
from flask_cors import CORS
from detector import uses_ip_address

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
 return "Phishing URL Detector backend is running!"

@app.route("/check")
def check_url():
    url = request.args.get("url")

    if not url:
        return jsonify({"error": "URL is required"}), 400

    suspicious = uses_ip_address(url)

    return jsonify({
        "url": url,
        "suspicious": suspicious
    })

if __name__ == "__main__":
    app.run(debug=True)
