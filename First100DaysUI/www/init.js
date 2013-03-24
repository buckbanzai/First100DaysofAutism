window.currentTeam = 0;
var firstLaunch = function() {
    return localStorage.getItem('first100launch') == null;
}

$(document).bind("mobileinit", function () {
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.page.prototype.options.domCache = false;
});

if (firstLaunch()) {
    localStorage.setItem('first100launch', 'no', { path: '/' });
    window.location.href = "welcome.html";
}
