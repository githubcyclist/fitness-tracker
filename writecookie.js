// original name mor3efunction.js
function write() {
	document.cookie = "outsidetime=" + document.getElementById('minspentoutside').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	document.cookie = "timespentpushups=" + document.getElementById('minspentpushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	document.cookie = "pushupsdone=" + document.getElementById('timesdonepushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;"
        document.cookie = "timespentpullups=" + document.getElementById('minspentpullups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
	document.cookie = "pullupsdone=" + document.getElementById('timesdonepullups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC;";
}

