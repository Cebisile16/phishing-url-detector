# phishing-url-detector

## Live Application

**Live Website:** https://phishing-url-detector-web.onrender.com

**Backend API:** https://phishing-url-detector-9yvx.onrender.com

## Overview

Phishing is a type of cyberattack where attackers try to trick people into providing sensitive information such as passwords, banking details, or personal information.

The **Phishing URL Detector** is a simple cybersecurity project that analyses a URL and identifies characteristics that may indicate that the URL is suspicious or potentially associated with a phishing attempt.

The purpose of this project is to help users understand some of the warning signs they should look for before visiting a website or entering sensitive information.

## Features

The application checks a URL for several basic suspicious characteristics:

* Whether the URL uses HTTP instead of HTTPS
* Whether an IP address is used instead of a domain name
* Suspicious words such as `login`, `verify`, `account`, `secure`, or `update`

The application then provides a result indicating whether the URL triggered any of the checks.

The detector does not confirm that a URL is definitely safe or malicious. It identifies basic characteristics that may require further investigation.

## Cybersecurity Concepts

This project demonstrates an understanding of:

* Phishing attacks
* Social engineering
* URL analysis
* HTTPS and secure communication
* Suspicious URLs
* Basic threat detection
* Cybersecurity awareness

## Technologies

The project was developed using:

* HTML
* CSS
* JavaScript
* Python
* Flask
* Flask-CORS
* Gunicorn
* Git and GitHub
* Render

## How It Works

1. The user enters a URL into the website.
2. JavaScript sends the URL to the Flask backend.
3. The Flask backend passes the URL to the detection functions.
4. The detector checks for an IP address, HTTP, and suspicious words.
5. The backend returns the result as JSON.
6. JavaScript displays the result to the user.

## Project Structure

```text
phishing-url-detector/
│
├── backend/
│   ├── app.py
│   └── detector.py
│
├── index.html
├── style.css
├── script.js
├── requirements.txt
└── README.md
```

## Example

A URL such as:

```text
http://192.168.1.20/login/verify-account
```

could be flagged because:

* It uses HTTP instead of HTTPS.
* It uses an IP address instead of a domain name.
* It contains suspicious words such as `login` and `verify`.

The application would warn the user that the URL contains characteristics that should be treated with caution.

## Future Improvements

Possible future improvements include:

* Checking URLs against known phishing databases
* Adding domain reputation checks
* Adding WHOIS information
* Using threat intelligence APIs
* Improving the risk-scoring system
* Creating browser-extension functionality
* Adding automated URL scanning
