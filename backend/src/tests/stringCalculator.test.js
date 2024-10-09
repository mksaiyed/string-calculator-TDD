const { StringCalculator } = require("../index");

describe("Test cases for string calculator", () => {
    let stringCalculator;
    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    test("1. For empty string it should return 0", () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    test("2. It should return the numebr itself if it's valid number given as a string", () => {
        expect(stringCalculator.add("1")).toBe(1);
        expect(stringCalculator.add("5")).toBe(5);
        expect(stringCalculator.add("k")).toBe(0);
    });

    test("3. Should return sum of multiple input number seperated by comma", () => {
        expect(stringCalculator.add("1,5")).toBe(6);
        expect(stringCalculator.add("5,10,50")).toBe(65);
    });

    test("4. Handle new line in input string", () => {
        expect(stringCalculator.add("1\n2,5")).toBe(8);
        expect(stringCalculator.add("5\n10\n50,1,1")).toBe(67);
    });

    test("5. Handle new custom delimeter staring with // in input string", () => {
        expect(stringCalculator.add("//;\n2;4")).toBe(6);
        expect(stringCalculator.add("//>\n5>10>20")).toBe(35);
    });

    test("6. Handle negative number in the input string", () => {
        expect(() => stringCalculator.add("2,-4")).toThrow(
            "Negative numbers not allowed: -4"
        );
        expect(() => stringCalculator.add("1,-3,5")).toThrow(
            "Negative numbers not allowed: -3"
        );
    });

    test("7. Handle multiple negative numbers in the input string", () => {
        expect(() => stringCalculator.add("-2,-4")).toThrow(
            "Negative numbers not allowed: -2,-4"
        );
        expect(() => stringCalculator.add("-1,3,-5")).toThrow(
            "Negative numbers not allowed: -1,-5"
        );
    });

    test("8. Handle the count of the number of times add() has been called", () => {
        expect(stringCalculator.getAddFunctionCallCount()).toBe(0); // No add() function call yet, should be 0
        stringCalculator.add("1,1");
        expect(stringCalculator.getAddFunctionCallCount()).toBe(1); // One add() function call, should be 1
        stringCalculator.add("5,10");
        stringCalculator.add("2,0");
        expect(stringCalculator.getAddFunctionCallCount()).toBe(3); // Three add() function call, should be 3
    });

    test("9. Ignore number if it's greater than 1000", () => {
        expect(stringCalculator.add("1001,1,1")).toBe(2);
        expect(stringCalculator.add("//;\n1111;5;10")).toBe(15);
    });
});
