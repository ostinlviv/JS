var name = prompt ('Your name', '');
var date = prompt ('Date of meeting', '');
var city = prompt ('City', '');
if ((name !== '' && date !== '' && city !== '') && (name !== null && date !== null && city !== null)) {
    alert (name + ' has a meeting ' + date + ' somewhere in ' + city);
}
else alert ('You must answer all questions');