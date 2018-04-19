function anagram() {
    var result = '';
    var string = prompt ('Input the string', '');
    for (var i = 0; i < string.length; i++) {
        result += string.charAt (i) + ' ';
        for (var j = i + 2; j < string.length + 1; j++) {
            result += string.substring(i,j) + ' ';
        }
    }
    return result;
}
console.log (anagram());