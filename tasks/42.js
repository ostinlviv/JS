function validatePostalCode (code) {
    var regexCode = /^(\d{5})$/g;
    if (regexCode.test(code)) {
        return alert (code + ' is Ukrainian postal code');
    } else {
        return alert (code + ' is not Ukrainian postal code');
    }
}

var code = prompt ('Input postal code', '');
validatePostalCode (code);