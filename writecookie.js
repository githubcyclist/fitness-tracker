// original name mor3efunction.js
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
        document.cookie = "timespentjumprope=" + document.getElementById('minspentpushups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
	document.cookie = "timesjumpedrope=" + document.getElementById('timesjumpedrope').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
	document.cookie = "timespentpullups=" + document.getElementById('minspentpullups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
	document.cookie = "pullupsdone=" + document.getElementById('timesdonepullups').value + ";" + "expires=Thu, 1 Jan 3000 12:00:00 UTC"
}

