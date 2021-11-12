chrome.runtime.onInstalled.addListener(function (object) {
    var path = chrome.runtime.getURL("page.html")
    chrome.tabs.create({url: path});
});
