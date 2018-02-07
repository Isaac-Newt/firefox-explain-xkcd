/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function handleClick() {
  // Get Active Tab URL
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs) => {
    let tab = tabs[0];
      // Debugging stuff
      // console.log(tab.url);
      // console.log(tab.url.slice(0, 11));

    // Modify the URL

    // For www domain
    if (tab.url.slice(0, 11) == "https://www") {
      let url = tab.url;
        // Debugging stuff
        // console.log(url.slice(0, 11));
        // console.log(url.slice(20));

      let newURL = "https://explainxkcd.com/" + url.slice(20);
        // Debugging stuff
        // console.log(newURL);
        browser.tabs.create({
          "url": newURL
        });
    }

    // For normal domain
    else {
      let url = tab.url;
        // Debugging stuff
        // console.log(url.slice(17));

      let newURL = "https://explainxkcd.com/" + url.slice(17);
        // Debugging stuff
        // console.log(newURL);
      browser.tabs.create({
        "url": newURL
      });
    }

  });
}

// Add event listener
browser.pageAction.onClicked.addListener(handleClick);
