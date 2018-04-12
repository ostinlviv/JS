function upperCase() {
    var result = '';
    var string = prompt ('Input the string', '');
    result = string.charAt(0).toUpperCase();
    for (i = 1; i < string.length; i++) {
        if (string.charAt(i) == ' ') {
            result += ' ' + string.charAt(i + 1).toUpperCase();
            i = i + 2;
        }
        result += string.charAt(i);
    }
    return result;
}
console.log (upperCase());