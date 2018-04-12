function count () {
    var log = '';
    for (var i = 10; i >= 0; i--) {
        log += i + ' ';
    }
    return log;
}
console.log (count ());