function factorial() {
    var number = +prompt('Input number', '');
    var res = 1;
        for (i = 1; i <= number; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial());