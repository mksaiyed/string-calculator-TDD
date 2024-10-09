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
}

module.exports = { add };
