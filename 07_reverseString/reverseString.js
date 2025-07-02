const reverseString = function(string) {

    let countLetters =0;
    for(let letter in string)
        countLetters++;
    countLetters--; // accounts for the /0
    let queue = "";
    for(let letter in string)
    {
        queue += string.charAt(countLetters);
        --countLetters;
    }
    return queue;
};

// Do not edit below this line
module.exports = reverseString;
