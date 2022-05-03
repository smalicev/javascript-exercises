const reverseString = function(string) {
    myArray=string.split("");
    revArray=myArray.reverse();
    
    joinArray=revArray.join('');

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
