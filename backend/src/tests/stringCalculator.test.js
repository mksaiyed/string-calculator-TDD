const { add } = require("../index");

describe("Test cases for string calculator", () => {
    test("1. For empty string it should return 0", () => {
        expect(add("")).toBe(0);
    });

    test("2. It should return the numebr itself if it's valid number given as a string", () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
        expect(add("k")).toBe(0);
    });
});
