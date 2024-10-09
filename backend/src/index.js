class StringCalculator {
    constructor() {
        // track the number of times add() is called
        this.addFunctionCallCounter = 0;
    }
    add(numberString) {
        // increase the function call counter
        this.addFunctionCallCounter++;

        // check for empty string
        if (!numberString?.length) {
            return 0;
        }

        // check for the single input
        if (numberString?.length === 1) {
            // return 0 if it's Not A Number
            if (isNaN(parseInt(numberString))) return 0;
            return parseInt(numberString);
        }

        /* check the below input scenarios
            1. The multiple input seperated by comma
            2. Handle new line in input string
            3. Handle diffrent custom delimiters
            4. Handle negative numbers
            5. if number is greater than 1000 so ignore that number
            6. Handle delimiter of any length
        */

        // Default Delimiter
        let delimiter = /[\n,]/;
        if (numberString.startsWith("//")) {
            const seperatedArray = numberString.split("\n");
            // Extract custom delimiter which is after //
            const newDelimiter = seperatedArray[0].slice(2);
            if (newDelimiter.startsWith("[") && newDelimiter.endsWith("]")) {
                delimiter = new RegExp(`${newDelimiter.slice(1, -1)}`);
            } else {
                delimiter = new RegExp(`[${newDelimiter}]`);
            }
            numberString = seperatedArray[1];
        }
        let numberArray = numberString.split(delimiter);

        // check negative numbers
        const negativeNumbers = numberArray.filter((num) => parseInt(num) < 0);
        if (negativeNumbers?.length) {
            throw new Error(
                `Negative numbers not allowed: ${negativeNumbers.join(",")}`
            );
        }
        numberArray = numberArray.filter((num) => parseInt(num) <= 1000);
        const numberSum = numberArray.reduce((acc, current) => {
            return acc + parseInt(current);
        }, 0);
        return numberSum;
    }

    getAddFunctionCallCount() {
        return this.addFunctionCallCounter;
    }
}

module.exports = { StringCalculator };
