function validate (x, y) {
    res = [];
    for (var prop in user) {
        res.push(prop);
    }
    return x.length == res.length && x.every((v,i)=>v === res[i]);
}

var user = {
    name:"Roman",
    surname:"Rodomansky"
};
var arr = ["name","surname"];
console.log(validate (arr, user));

var user = {
    name:"Roman",
    surname:"Rodomansky"
};
var arr = ["name","surname","age"];
console.log(validate (arr, user));