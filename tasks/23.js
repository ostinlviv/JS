function anagram() {
    var result = '';
    var string = prompt ('Input the string', '');
    for (i = 0; i < string.length; i++) {
        result += string.charAt (i) + ' ';
        for (j = i + 2; j < string.length + 1; j++) {
            result += string.substring(i,j) + ' ';
        }
    }
    return result;
}
console.log (anagram());