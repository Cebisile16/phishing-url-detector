from urllib.parse import urlparse

import ipaddress


def uses_ip_address(url):
    try:
        parsed_url = urlparse(url)
        hostname = parsed_url.hostname

        if hostname is None:
            return False

        ipaddress.ip_address(hostname)
        return True

    except ValueError:
        return False


def uses_http(url):
    parsed_url = urlparse(url)
    return parsed_url.scheme == "http"


def contains_suspicious_words(url):
    suspicious_words = [
        "login",
        "verify",
        "account",
        "secure",
        "update",
    ]

    url_lower = url.lower()

    return any(word in url_lower for word in suspicious_words)

