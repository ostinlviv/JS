function converter () {
    var cur = prompt ('What currency do you have?', '');
    var amount = +prompt ('How much ' + cur + ' do you have?', '');
    cur = cur.toUpperCase ();
    if (cur == 'USD') {
        var result = amount * 26.23;
        alert ('It will be ' + result + ' UAH');
    }
    else if (cur == 'UAH') {
        var result = amount / 25.89;
        alert ('It will be ' + result + ' USD');
    }
    else {
        alert ('I dont know this currency');
    }
}

converter ();