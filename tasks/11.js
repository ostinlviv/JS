function pair (arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i]);
        }
    }
    return res;
}

var arr = [1, 5, 23, 4, 2, 5, 6];
console.log (pair (arr));