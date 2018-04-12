function reverse () {
    var string = prompt ('Input the string', '');
    return string.split('').reverse().join('');
}
alert (reverse());