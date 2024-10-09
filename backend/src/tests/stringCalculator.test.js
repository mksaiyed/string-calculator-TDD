const { add } = require("../index");

describe("Test cases for string calculator", () => {
    test("1. For empty string it should return 0", () => {
        expect(add("")).toBe(0);
    });
});
