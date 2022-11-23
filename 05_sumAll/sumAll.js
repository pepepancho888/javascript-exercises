const sumAll = function(num1, num2) {
    let sum = 0;
    let mayor = 0;
    let menor = 0;
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    } else {
        if (num1>num2){
            mayor = num1;
            menor = num2;
        } else {
            mayor = num2;
            menor = num1;
        }
        for (i=menor;i<=mayor;i++) {
            sum +=i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
