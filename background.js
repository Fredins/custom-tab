// SPDX-License-Identifier: MPL-2.0

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({url: chrome.runtime.getURL("options.html")});
});

chrome.webRequest.onBeforeRequest.addListener(
    () => ({ redirectUrl: chrome.runtime.getURL("tab/tab.html") }),
    { urls: [chrome.extension.getURL("filter.html")]},
     ["blocking"]
);
