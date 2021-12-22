//👉 Write your tests below here:
import { toKebabCase } from "./main.js";

const tests = [
  ["camelCase", "camel-case"],
  ["isItWorking", "is-it-working"],
  ["myFavouriteString", "my-favourite-string"],
  ["iDontKnowWhatImDoing", "i-dont-know-what-im-doing"],
  ["iHateTesting", "i-hate-testing"],
];

describe("Converting to kebab-case", () => {
  test.each(tests)("Should convert %s to %s", (camelCase, kebabCase) => {
    const actual = toKebabCase(camelCase);
    const expected = kebabCase;

    expect(actual).toBe(expected);
  });
});
