const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip trailing", () => {
  const input = "https://dinodegracia.carrd.co/";
  const actual = normalizeURL(input);
  const expected = "dinodegracia.carrd.co";
  expect(actual).toEqual(expected);
});

test("normalizeURL caps", () => {
  const input = "https://DinodeGracia.carrd.co";
  const actual = normalizeURL(input);
  const expected = "dinodegracia.carrd.co";
  expect(actual).toEqual(expected);
});
