const { cleanTitle } = require("../util");

test("cleanTitle with all text, no blocklist", () => {
  const title = "This is a title";
  expect(cleanTitle(title, [])).toBe(title);
});

test("cleanTitle with text + emojis, no blocklist", () => {
  const title = "πβπ¨π¨This is a title";
  expect(cleanTitle(title, [])).toBe(title);
});

test("cleanTitle with emojis, no blocklist", () => {
  const title = "πβπ¨π¨";
  expect(cleanTitle(title, [])).toBe(title);
});

test("cleanTitle with text + emojis, blocklist with emojis", () => {
  const title = "πβπ¨π¨This is a title";
  const cleanedTitle = "This is a title";
  expect(cleanTitle(title, ["πβπ¨", "π¨"])).toBe(cleanedTitle);
});

test("cleanTitle with emojis, blocklist with emojis", () => {
  const title = "πβπ¨π¨";
  const cleanedTitle = "";
  expect(cleanTitle(title, ["πβπ¨", "π¨"])).toBe(cleanedTitle);
});
