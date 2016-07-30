function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') {
		c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		return c.substring(name.length,c.length);
	}
    }
    return "";
}
function add(a,b){
    return a-(-b);
}
function read() {

var thisisdacookie = "  Time spent outside: " + getCookie("outsidetime") + " minutes";
var thisisdacookie2 = "  Time spent doing push-ups: " + getCookie("timespentpushups") + " minutes";
var thisisdacookie3 = "  Push-ups done " + getCookie("pushupsdone") + " times";
var thisisdacookie4 = "  Time spent doing pull-ups: " + getCookie("timespentpullups") + " minutes";
var thisisdacookie5 = "  Pull-ups done " + getCookie("pullupsdone") + " times";
var thisisdacookie6 = "  Exercised " + getCookie("timesexercised") + " times";
/*Old code to read localstorage
var mydomstorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null)
if(mydomstorage) {
	var thisisdacookie6 = "  Exercised " + parseInt(localstorage.getItem('timesexercised')) + " times";
	document.getElementById('timesexercised').innerHTML=thisisdacookie6;
} else {
	document.write("Sorry, this browser does not support DOM storage.");
}*/
if(thisisdacookie6 == "Exercised times") {
	thisisdacookie6 = "Exercised once"
}
document.getElementById('timespentpushups').innerHTML=thisisdacookie2;
document.getElementById('pushupsdone').innerHTML=thisisdacookie3;
document.getElementById('timeoutside').innerHTML=thisisdacookie;
document.getElementById('timespentpullups').innerHTML=thisisdacookie4;
document.getElementById('pullupsdone').innerHTML=thisisdacookie5;
document.getElementById('timesexercised').innerHTML=thisisdacookie6;
}
