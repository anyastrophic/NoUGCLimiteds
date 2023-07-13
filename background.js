function checkUrl(tabId, changeInfo, _) {
    if (changeInfo.url && changeInfo.url.includes("roblox") && changeInfo.url.includes("salesTypeFilter=2") && !changeInfo.url.includes("CreatorName=")) {
        chrome.tabs.update(tabId, { url: `${changeInfo.url}&CreatorName=Roblox` });
    }
}

chrome.tabs.onUpdated.addListener(checkUrl);