const { getRiskMessage, isValidInput } = require("../frontend");

test("detects a suspicious URL", () => {
  const result = getRiskMessage(true);

  expect(result.level).toBe("Potentially Suspicious");
});

test("handles a safe URL", () => {
  const result = getRiskMessage(false);

  expect(result.level).toBe("No Suspicious Signs Detected");
});

test("accepts a URL as valid input", () => {
  expect(isValidInput("https://example.com")).toBe(true);
});

test("rejects empty input", () => {
  expect(isValidInput("")).toBe(false);
});
