const removeFromArray = function(array,...others) {
    let object = [];

    for(let number of array)
    {
        if(!others.includes(number))
            object.push(number);
    }
    return object;

};

// Do not edit below this line
module.exports = removeFromArray;
