function convertTemp () {
    var c = +prompt ('Type a tempreture in Celsius', '');
    var f = c * (9/5) + 32;
    return f + ' Fahrenheit';
}

alert (convertTemp ());