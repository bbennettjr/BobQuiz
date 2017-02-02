function setCookie(cookieName, cookieValue, cookiePath, cookieExpires) {
	cookieValue = escape(cookieValue);
	if (cookieExpires == "") {
		var nowDate = new Date();
		nowDate.setMonth(nowDate.getMonth() + 6);
		cookieExpires = nowDate.toGMTString();
	}
	if (cookiePath != "") {
		cookiePath = ";path=" + cookiePath;
	}
	document.cookie = cookieName + "=" + cookieValue + ";expires=" + cookieExpires + cookiePath;
}

function getCookieValue(cookieName) {
	var cookieValue = document.cookie;
	var regExp = new RegExp("\\b" + cookieName + "=[a-zA-Z0-9%]*");
	cookieValue = cookieValue.match(regExp);
	if (cookieValue != null) {
		cookieValue = cookieValue[0];
		var cookieStartsAt = cookieValue.indexOf("=") + 1;
		cookieValue = unescape(cookieValue.substring(cookieStartsAt, cookieValue.length));
	} else {
		alert("Cookie name not found.");
	}
	return cookieValue;
}