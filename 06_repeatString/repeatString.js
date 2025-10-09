const repeatString = (word, value) => {
    if (value < 0) return "ERROR";
    let string = "";
    for(let i = 0; i < value; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
