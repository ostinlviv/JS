function converter () {
    var cur = prompt ('What currency do you have USD or UAH?', '');
    var amount = +prompt ('How much ' + cur + ' do you have?', '');
    cur = cur.toUpperCase ();
    var currentUsdUah = 26.23;
    var currentUahUsd = 25.89;
    var result;
    if (cur === 'USD') {
        result = amount * currentUsdUah;
        alert ('It will be ' + result + ' UAH');
    }
    else if (cur === 'UAH') {
        result = amount / currentUahUsd;
        alert ('It will be ' + result + ' USD');
    }
    else {
        alert ('I dont know this currency');
    }
}

converter ();