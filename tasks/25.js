function firstNotRepeatableChar() {
    var result = '';
    var string = prompt ('Input the string', '');
    for (var i = 0; i < string.length; i++) {
        var count = 0;
        for (var j = 0; j < string.length; j++) {
            if (string.charAt(i) === string.charAt(j)) {
                count += 1;
            }
        }
        if (count < 2) {
            result = string.charAt(i);
        }
    }
    return result;
}
console.log (firstNotRepeatableChar());