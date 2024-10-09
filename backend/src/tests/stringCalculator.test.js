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

    test("3. Should return sum of multiple input number seperated by comma", () => {
        expect(add("1,5")).toBe(6);
        expect(add("5,10,50")).toBe(65);
    });
});
