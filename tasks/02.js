function pythagor () {
    var a = +prompt ('Input length of the 1st leg', '');
    var b = +prompt ('Input length of the 2nd leg', '');
    var c = +prompt ('Input length of the hypotenuse', '');
    if (a > 0 && b > 0 && c > 0) {
        if (Math.pow (c,2) == Math.pow (a,2) + Math.pow (b,2)) {
            alert ('It is a right triangle');
        } else {
            alert ('It is not a right triangle');
        }
    } else {
        alert ('All leghths must be a numbers and greater than 0');
    }
}

pythagor ();