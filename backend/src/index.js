function add(numberString) {
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
    const numberSum = numberArray.reduce((acc, current) => {
        return acc + parseInt(current);
    }, 0);
    return numberSum;
}

module.exports = { add };
