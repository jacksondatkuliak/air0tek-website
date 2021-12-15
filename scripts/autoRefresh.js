// wowee a js file that was actually written by one of the students!!!!!
// This javascript file is included in door.html to refresh the page automatically every hour. It does this so the weather and instagram embeds get refreshed. Could I do this in another, none-instrusive way? Probably, but I'm lazy -Jackson D
function refreshTimeout() {
    var refresh = 3600000; //Time it will take to refresh the page, in milliseconds ; 3600000 = 1 hour
    mytime=setTimeout('reload()', refresh);
}

function reload() {
    location.reload();
    refreshTimeout();
}

refreshTimeout();