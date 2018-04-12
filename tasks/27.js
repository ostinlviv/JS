function rand(max,min) {
    var result = min - 0.5 + Math.random() * (max - min + 1)
    result = Math.round(result);
    return result;
}

console.log(rand(20,1))