function isGreaterThan(value1, value2) {
    // Check if both arguments are numbers
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        return false;
    }

    // Compare the values and return the result
    return value1 > value2;
}