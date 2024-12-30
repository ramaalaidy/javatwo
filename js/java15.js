function isNumber(input) {
    if (isNaN(input)) {
        console.log(input + " is not a number");
    } else {
        console.log(input + " is a valid number");
    }
}

isNumber(11);        // "11 is a valid number"
isNumber("19");      // "19 is a valid number"
isNumber("xyz");     // "xyz is not a number"
isNumber("17.5");    // "17.5 is a valid number"
isNumber("21F");     // "21F is not a number"
