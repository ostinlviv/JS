var res = '';
function recursion (n) {
    if (n >= 0) {
        recursion (n-1);
        res += n + ' ';
    }
    return res;
}

console.log(recursion (+prompt('Please, type end value', '')));