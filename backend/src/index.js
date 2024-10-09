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

    // check for the multiple input seperated by comma
    const numberArray = numberString.split(",");
    const numberSum = numberArray.reduce((acc, current) => {
        return acc + parseInt(current);
    }, 0);
    return numberSum;
}

module.exports = { add };
