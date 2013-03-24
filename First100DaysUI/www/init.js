window.currentTeam = 0;
$(document).bind("mobileinit", function () {
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.page.prototype.options.domCache = false;
});