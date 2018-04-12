function binarySearch(target, object) {
    var obj = object;
    for (var i = obj.from; i <= obj.to; i++) {
        data.push(i);
    }
    if(obj.to < 1) return data[0];
    const middle = Math.floor(obj.from + (obj.to - obj.from)/2);
    if (target === data[middle]) {
        result += middle;
        return data[middle];
    }
    if (obj.to - 1 === obj.from) return Math.abs(data[obj.from] - target) > Math.abs(data[obj.to] - target) ? data[obj.to] : data[obj.from];
    if (target > data[middle]){
        obj.from = middle;
        result += middle + ', ';
        return binarySearch(target, obj);
    }
    if (target < data[middle]) {
        obj.to = middle;
        result += middle + ', ';
        return binarySearch(target, obj);
    }
    return result;
}

var data = [];
var result = '';
binarySearch(27, {from:0, to:100});
console.log(result);