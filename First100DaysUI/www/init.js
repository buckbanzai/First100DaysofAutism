window.currentTeam = 0;
var firstLaunch = function() {
    return localStorage.getItem('first100launch') != "no";
}

var resetFirstLaunch = function() {
    localStorage.setItem('first100launch', 'yes', { path: '/' });
}


$(document).bind("mobileinit", function () {
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.page.prototype.options.domCache = false;
    $.mobile.ignoreContentEnabled = true;
});

if (firstLaunch()) {
    localStorage.setItem('first100launch', 'no', { path: '/' });
    window.location.href = "welcome.html";
}
