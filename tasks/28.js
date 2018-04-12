function percentage (value,percent) {
    var result = percent/100*value;
    result = Math.round(result*100)/100;
    return result;
}

console.log(percentage(1000,47.12));