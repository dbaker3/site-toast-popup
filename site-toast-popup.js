var popUpTimeout = 3000;
var popUpNumTimesShow = 3;
var cookieName = 'phwTutorialBannerShownRev0';
var cookieValue = 1;
var cookieMaxAge = 15552000;

jQuery(document).ready(function() { 
	jQuery('#sitetoastpopup .closer').click(hideToastPop);
    jQuery('#sitetoastpopup .closer').click(doNotShowAgain);
    jQuery('#sitetoastpopup a').click(doNotShowAgain);
    
	if (!isCookieSet(cookieName)) { 
    	window.setTimeout(showToastPop, popUpTimeout);
        setCookie(cookieValue);
    } 
    else if (isCookieSet(cookieName)) {
    	var timesShown = getCookieValue();
    	if(timesShown < popUpNumTimesShow) {
        	window.setTimeout(showToastPop, popUpTimeout);
            setCookie(++timesShown);
        }
    }
    
});

function isCookieSet(cookieName) {
	if (document.cookie.search(cookieName) < 0)
    	return false;
    else
        return true;
}

function getCookieValue() {
	var re = new RegExp("(?:" + cookieName +"=)(\\d*)");
    var cookieValue = re.exec(document.cookie);
    if (cookieValue != null) {
    	return cookieValue[1];
    }
}

function showToastPop() {
    var toastpop = jQuery('#sitetoastpopup');
    toastpop.animate({
        bottom: "5px"
    }, 1000);
    toastpop.animate({
        bottom: "0px"
    }, 100);
}

function hideToastPop() {
	var toastpop = jQuery('#sitetoastpopup');
    toastpop.animate({
        bottom: "5px"
	}, 100);
    toastpop.animate({
        bottom: "-100px"
	}, 250);
}

function setCookie(timesShown=0) {
	document.cookie = cookieName + '=' + timesShown + '; max-age=' + cookieMaxAge.toString() + '; path=/';
}

function doNotShowAgain() {
	setCookie(popUpNumTimesShow);
}