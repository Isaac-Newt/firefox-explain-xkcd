/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function handleClick() {
  // Get Active Tab URL
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs) => {
    let tab = tabs[0];
    console.log(tab.url);

    // Modify URL
    let url = tab.url;
    console.log(url.slice(17));

    let newURL = "https://www.explainxkcd.com/" + url.slice(17);
    console.log(newURL);
  });
}

// Add event listener
browser.pageAction.onClicked.addListener(handleClick);
