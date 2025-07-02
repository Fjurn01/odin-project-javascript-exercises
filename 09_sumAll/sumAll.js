const sumAll = function(one, two) {
    let first,second;
    if(one < two) {
         first = one 
         second = two;
    }
    else if(one > two) {
         first = two 
         second = one;
        }
    if(first <= 0 || second <= 0)
    {
        return "ERROR";
    }
    if( !Number.isInteger(one)  || !Number.isInteger(two))
                return "ERROR";
    let sum =0;
    while(first <= second)
    {
        sum+= first;
        first++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
