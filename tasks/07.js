function converter () {
    var name = prompt ('What do you want convert RAD or DEG?', '').toUpperCase ();
    var amount = +prompt ('Please, type amount', '');
    var halfCircle = 180;
    var result;
    if (name === 'DEG') {
        result = amount * (Math.PI / halfCircle);
        alert ('It will be ' + result + ' radians');
    }
    else if (name === 'RAD') {
        result = amount * (halfCircle / Math.PI);
        alert ('It will be ' + result + ' degrees');
    }
    else {
        alert ('Please, type DEG or RAD');
    }
}
converter ();