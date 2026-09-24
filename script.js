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
        "This URL shows one or more characteristics that may indicate phishing.";

      checks.innerHTML = `
        <li>One or more suspicious URL characteristics were detected.</li>
      `;
    } else {
      riskLevel.textContent = "No Suspicious Signs Detected";
      riskMessage.textContent =
        "This URL did not trigger any of the checks in this detector.";

      checks.innerHTML = `
        <li>No suspicious characteristics were detected.</li>
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
