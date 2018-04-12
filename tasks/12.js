function maxmin (arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    return console.log ('max: ' + max + ' min: ' + min);
}
var arr = [1, 92, -5, 25];
maxmin (arr);