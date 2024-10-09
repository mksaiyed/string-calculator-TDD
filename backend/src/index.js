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
            3. Handle diffrent custom delimeters
            4. Handle negative numbers
        */

        // Default Delimeter
        let delimeter = /[\n,]/;
        if (numberString.startsWith("//")) {
            const seperatedArray = numberString.split("\n");
            // Extract custom delimeter which is after //
            delimeter = new RegExp(`[${seperatedArray[0][2]}]`);
            numberString = seperatedArray[1];
        }
        const numberArray = numberString.split(delimeter);

        // check negative numbers
        const negativeNumbers = numberArray.filter((num) => parseInt(num) < 0);
        if (negativeNumbers?.length) {
            throw new Error(
                `Negative numbers not allowed: ${negativeNumbers.join(",")}`
            );
        }
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
