/*function createCookie(name, value, expires, path, domain) {
  var cookie = name + "=" + escape(value) + ";";

  if (expires) {
    // If it's a date
    if(expires instanceof Date) {
      // If it isn't a valid date
      if (isNaN(expires.getTime()))
       expires = new Date();
    }
    else
      expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

    cookie += "expires=" + expires.toGMTString() + ";";
  }

  if (path) {
    cookie += "path=" + path + ";";
  }
  if (domain)
    cookie += "domain=" + domain + ";";
}
  document.cookie = cookie;
  }

function getCookie(name) {
  var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
  var result = regexp.exec(document.cookie);
  return (result === null) ? null : result[1];
}
function writeTextFile() {
	createCookie("outsidemins", document.getElementById('minspentoutside').value, new Date(new Date().getTime() + 10000));
}
function readTextFile() {
	document.write(getCookie("outsidemins"));
}*/
function write() {
	document.cookie = "outsidetime=" + document.getElementById('minspentoutside').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
	document.cookie = "timespentpushups=" + document.getElementById('minspentpushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
	document.cookie = "pushupsdone=" + document.getElementById('timesdonepushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
}
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
function read() {
	var thisisdacookie = " " + getCookie("outsidetime");
	var thisisdacookie2 = " " + getCookie("timespentpushups");
	var thisisdacookie3 = " " + getCookie("pushupsdone");
	document.getElementById('timeoutside').innerHTML=thisisdacookie;
	document.getElementById('timespentpushups').innerHTML=thisisdacookie2;
	document.getElementById('pushupsdone').innerHTML=thisisdacookie3;
	
}
