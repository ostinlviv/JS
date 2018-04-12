function bubbleSort (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr.length - 1; j++){
            if (arr[j] < arr[j + 1]) {
                var a = arr[j]
                var b = arr[j + 1]
                arr[j] = b
                arr[j + 1] = a
            }
        }
    }
    return arr;
}

var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort (arr));