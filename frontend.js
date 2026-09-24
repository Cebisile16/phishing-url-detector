function getRiskMessage(suspicious) {
    if (suspicious) {
        return {
            level: "Potentially Suspicious",
            message:
                "This URL shows one or more characteristics that may indicate phishing."
        };
    }

    return {
        level: "No Suspicious Signs Detected",
        message:
            "This URL did not trigger any of the checks in this detector."
    };
}

function isValidInput(url) {
    return url.trim() !== "";
}

module.exports = {
    getRiskMessage,
    isValidInput
};

