const urlInput = document.getElementById("urlInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const riskLevel = document.getElementById("riskLevel");
const riskMessage = document.getElementById("riskMessage");
const checks = document.getElementById("checks");

checkButton.addEventListener("click", async () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  try {
    const response = await fetch(
      `http://127.0.0.1:5000/check?url=${encodeURIComponent(url)}`,
    );

    const data = await response.json();

    result.classList.remove("hidden");
    checks.innerHTML = "";

    if (data.suspicious) {
      riskLevel.textContent = "Potentially Suspicious";
      riskMessage.textContent =
        "This URL shows a characteristic that may indicate phishing.";

      checks.innerHTML = `
                <li>URL uses an IP address instead of a domain name.</li>
            `;
    } else {
      riskLevel.textContent = "No Suspicious IP Address Detected";
      riskMessage.textContent =
        "This URL does not use an IP address as its hostname.";

      checks.innerHTML = `
                <li>URL uses a domain name instead of an IP address.</li>
            `;
    }
  } catch (error) {
    result.classList.remove("hidden");
    riskLevel.textContent = "Error";
    riskMessage.textContent =
      "Could not connect to the phishing detection server.";
    checks.innerHTML = "";
  }
});
