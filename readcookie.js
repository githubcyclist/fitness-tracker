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
var thisisdacookie4 = "  Jumped rope for " + getCookie("timespentjumpedrope") + " minutes";
var thisisdacookie5 = "  Jumped rope " + getCookie("timesjumpedrope") + " times";
document.getElementById('timespentpushups').innerHTML=thisisdacookie2;
document.getElementById('pushupsdone').innerHTML=thisisdacookie3;
document.getElementById('timeoutside').innerHTML=thisisdacookie;
document.getElementById('minjumpedrope').innerHTML=thisisdacookie4;
document.getElementById('timesjumpedrope').innerHTML=thisisdacookie5;
}
