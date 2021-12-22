//👉 Write your tests below here:
import { toKebabCase } from "./main.js";

const tests = [
  ["camelCase", "camel-case"],
  ["isItWorking", "is-it-working"],
  ["myFavouriteString", "my-favourite-string"],
  ["iDontKnowWhatImDoing", "i-dont-know-what-im-doing"],
  ["iHateTesting", "i-hate-testing"],
  ["abc123", "Input is not a camel case string, try again..."],
  [12345, "Input is not a camel case string, try again..."],
  [false, "Input is not a camel case string, try again..."],
  [{ string: "camelCase" }, "Input is not a camel case string, try again..."],
  [["isItWorking"], "Input is not a camel case string, try again..."],
];

describe("Converting to kebab-case", () => {
  test.each(tests)("Should convert %s to %s", (camelCase, output) => {
    const actual = toKebabCase(camelCase);
    const expected = output;

    expect(actual).toBe(expected);
  });
});
