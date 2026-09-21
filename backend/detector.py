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