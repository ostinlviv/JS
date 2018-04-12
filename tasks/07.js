function converter () {
    var name = prompt ('What do you want convert RAD or DEG?', '').toUpperCase ();
    var amount = +prompt ('Please, type amount', '');
    if (name == 'DEG') {
        var result = amount * (Math.PI / 180);
        alert ('It will be ' + result + ' radians');
    }
    else if (name == 'RAD') {
        var result = amount * (180 / Math.PI);
        alert ('It will be ' + result + ' degrees');
    }
    else {
        alert ('Please, type DEG or RAD');
    }
}
converter ();