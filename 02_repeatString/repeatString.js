const repeatString = function(string,num) {
    let placeHolder =''
    for (let i = 0; i < num; i++) {
        placeHolder +=string

    }

    if (num >= 0){
    return placeHolder
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
