// SPDX-License-Identifier: MPL-2.0

chrome.runtime.onInstalled.addListener(function (object) {
    var path = chrome.runtime.getURL("info.html")
    chrome.tabs.create({url: path});
});
