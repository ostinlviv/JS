function findDuplicates (arr) {
    var result = {};
    for (i = 0; i < arr.length; i++) {
        var count = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count += 1;
            }
        }
        if (count >= 2) {
            var str = arr[i];
            result[str] = true;
        }
    }
    return Object.keys(result);
}

console.log(findDuplicates ([1, 2, 3, 2, 5, 4, 3, 3, 2]));