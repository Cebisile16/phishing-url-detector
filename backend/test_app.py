from app import app


def test_check_url_with_safe_url():
    client = app.test_client()

    response = client.get("/check?url=https://example.com")

    assert response.status_code == 200
    assert response.json["suspicious"] is False


def test_check_url_with_suspicious_url():
    client = app.test_client()

    response = client.get("/check?url=http://example.com/login")

    assert response.status_code == 200
    assert response.json["suspicious"] is True


def test_check_url_without_url():
    client = app.test_client()

    response = client.get("/check")

    assert response.status_code == 400
    assert response.json["error"] == "URL is required"

