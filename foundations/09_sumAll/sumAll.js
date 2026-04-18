const sumAll = function(num1, num2) {
    let list = []
    if (typeof num1 != 'number' || typeof num2 != 'number' ||
        num1 < 0 || num2 < 0 ||
        !Number.isInteger(num1) || !Number.isInteger(num2)
    ) {
        return "ERROR"
    }
    else if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            list.push(i);
        }
    }
    else if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            list.push(i);
        }
    }

    return list.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
