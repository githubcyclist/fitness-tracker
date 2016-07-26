// original name mor3efunction.js
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
function write() {
	document.cookie = "outsidetime=" + document.getElementById('minspentoutside').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	document.cookie = "timespentpushups=" + document.getElementById('minspentpushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	document.cookie = "pushupsdone=" + document.getElementById('timesdonepushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;"
        document.cookie = "timespentpullups=" + document.getElementById('minspentpullups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	document.cookie = "pullupsdone=" + document.getElementById('timesdonepullups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	if (localStorage.getItem('timesexercised') === null) {
		localStorage.setItem('timesexercised', 0);
		var timesexercised = localStorage.getItem('timesexercised');
		timesexercised += 1
		localStorage.setItem('timesexercised', timesexercised);
	} else {
		localStorage.setItem('timesexercised', 0);
		var timesexercised = parseInt(localStorage.getItem('timesexercised'));
		timesexercised = timesexercised + 1
		localStorage.setItem('timesexercised', timesexercised);
		console.log(timesexercised);
	}
}
