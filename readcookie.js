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
var thisisdacookie2 = "  Time spent doing push-ups: " + getCookie("timespentpushups") + " minutes";
var thisisdacookie3 = "  Push-ups done " + getCookie("pushupsdone") + " times";
var thisisdacookie = "  Time spent outside: " + getCookie("outsidetime") + " minutes";
var thisisdacookiealltime = "  Time spent outside (all time): " + getCookie("alltimespentoutside") + " minutes";
document.cookie = "alltimespentoutside = " + add(thisisdacookiealltime+document.getElementById('minspentoutside').value) + ";" + "expires=Thu, Jan 1, 3000 12:00:00 UTC;";
document.getElementById('timespentpushups').innerHTML=thisisdacookie2;
document.getElementById('pushupsdone').innerHTML=thisisdacookie3;
document.getElementById('timeoutside').innerHTML=thisisdacookie;
document.getElementById('alltimespentoutside').innerHTML=thisisdacookiealltime;
}
