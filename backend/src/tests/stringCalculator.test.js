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

    test("4. Handle new line in input string", () => {
        expect(add("1\n2,5")).toBe(8);
        expect(add("5\n10\n50,1,1")).toBe(67);
    });

    test("5. Handle new custom delimeter staring with // in input string", () => {
        expect(add("//;\n2;4")).toBe(6);
        expect(add("//>\n5>10>20")).toBe(35);
    });

    test("6. Handle negative number in the input string", () => {
        expect(() => add("2,-4")).toThrow(
            "Negative number not allowed like -4"
        );
        expect(() => add("1,-3,5")).toThrow(
            "Negative number not allowed like -3"
        );
    });
});
