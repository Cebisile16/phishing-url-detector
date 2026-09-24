from detector import (
    uses_ip_address,
    uses_http,
    contains_suspicious_words
)


def test_uses_ip_address():
    assert uses_ip_address("http://192.168.1.100") is True
    assert uses_ip_address("https://example.com") is False


def test_uses_http():
    assert uses_http("http://example.com") is True
    assert uses_http("https://example.com") is False


def test_contains_suspicious_words():
    assert contains_suspicious_words("https://example.com/login") is True
    assert contains_suspicious_words("https://example.com/verify-account") is True
    assert contains_suspicious_words("https://example.com/weather") is False

