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
	if (getCookie("timesexercised") == null) {
		document.write("dfjasd");
		document.cookie = "timesexercised=0;expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	}
	var timesexercised = parseInt(getCookie("timesexercised"));
	//document.write(timesexercised);
	timesexercised += 1
	//console.log(timesexercised);
	document.cookie = "timesexercised=" + timesexercised + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	/* Code I was originally was gonna use to track times exercised, but abandoned in favor of cookies
	var mydomstorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null)
	if(mydomstorage){
		if (localStorage.getItem('timesexercised') == null) {
			localStorage.setItem('timesexercised', 0);
			var timesexercised = localStorage.getItem('timesexercised');
			timesexercised += 1
			localStorage.setItem('timesexercised', timesexercised);
		} else {
			var timesexercised = parseInt(localStorage.getItem('timesexercised'));
			timesexercised = timesexercised + 1
			localStorage.setItem('timesexercised', parseInt(timesexercised));
			console.log(timesexercised);
		}
	} else {
		document.write("Sorry, this browser does not support DOM storage.");
	}*/
}
