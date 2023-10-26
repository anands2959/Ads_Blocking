function blockAds() {
  let adSelectors = [
    '.ad-banner', '#ad-banner',"p",
    '.sponsored-content', '#sponsored-content',
    '.ad-box', '#ad-box', '.adApps', '#adApps', '.AdsApp', '#AdsApp',
    '.ad', '.ads', '.advert', '.advertisement',
    '#ad', '#ads', '#advert', '#advertisement','#google_ads_iframe_',
    '.banner-ad', '.sidebar-ad', '.top-ad'];

  adSelectors.forEach((selector) => {
    let adElements = document.querySelectorAll(selector);
    adElements.forEach((adElement) => {
      adElement.style.display = 'none';
    });
  });
}

window.addEventListener('load', blockAds());


const adList = [
  "*://*.doubleclick.net/*",
  "*://*.googlesyndication.com/*",
  "*://*.googletagservices.com/*",
  "*://*.googleadservices.com/*",
  "*://*.google-analytics.com/*",
  "*://*.googleadservices.com/*",
  "*://*.zedo.com/*",
  "*://*.adbrite.com/*",
  "*://*.adbureau.net/*",
  "*://*.carbonads.net/*",
  "*://*.cdn.carbonads.com/*",
  "*://*.cdn.carbonads.net/*",
  "*://*.cdn.doubleclick.net/*",
  "*://*.cdn.googletagservices.com/*",
  "*://*.cdn.googleadservices.com/*",
  "*://*.cdn.zedo.com/*",
  "*://*.safeframe.googlesyndication.com/*",
  "*://*.googleadservices.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: true}
  },
  {urls: adList},
  ["blocking"]
);
