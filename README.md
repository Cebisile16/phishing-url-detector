# phishing-url-detector

## Overview

Phishing is a type of cyberattack where attackers try to trick people into providing sensitive information such as passwords, banking details, or personal information.

The **Phishing URL Detector** is a simple cybersecurity project that analyses a URL and identifies characteristics that may indicate that the URL is suspicious or potentially associated with a phishing attempt.

The purpose of this project is to help users understand some of the warning signs they should look for before visiting a website or entering sensitive information.

## Features

The application will analyse a URL for suspicious characteristics such as:

* Whether the URL uses HTTPS
* Whether an IP address is used instead of a domain name
* Suspicious words such as `login`, `verify`, or `account`
* Unusually long URLs
* Excessive subdomains
* Suspicious characters in the URL
* Other basic phishing indicators

The application will then provide a result indicating whether the URL appears:

* Safe
* Suspicious
* High Risk

## Cybersecurity Concepts

This project demonstrates an understanding of:

* Phishing attacks
* Social engineering
* URL analysis
* HTTPS and secure communication
* Suspicious domains
* Basic threat detection
* Cybersecurity awareness

## Technologies

The project will be developed using:

* HTML
* CSS
* JavaScript


## How It Works

1. The user enters a URL.
2. The application analyses the URL.
3. Different characteristics of the URL are checked.
4. Each suspicious characteristic contributes to the risk assessment.
5. The application displays the result and explains why the URL was flagged.

## Example

A URL such as:

```text
http://192.168.1.20/login/verify-account
```

could be flagged because:

* It uses HTTP instead of HTTPS.
* It uses an IP address instead of a domain name.
* It contains suspicious words such as `login` and `verify`.

The application would warn the user that the URL should be treated with caution.



## Future Improvements

Possible future improvements include:

* Checking URLs against known phishing databases
* Adding domain reputation checks
* Adding WHOIS information
* Using threat intelligence APIs
* Improving the risk-scoring system
* Creating browser-extension functionality
* Adding automated URL scanning

