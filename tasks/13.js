function average(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var res = sum / arr.length;
    return res;
}

arr = [1, 4, 2];
console.log (average(arr));