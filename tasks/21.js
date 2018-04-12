function reverse () {
    var number = prompt ('Input the number', '');
    return +number.split('').reverse().join('');
}
alert (reverse());