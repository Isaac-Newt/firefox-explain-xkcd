/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Get current active tab


// Pseudo-code:

/*

var activetab = get active tab();

if (activeTab.URL[0-15] == https://xkcd.com/) {
  show pageaction button ();
}

*/

function handleClick() {
  // Get Active Tab URL
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs) => {
    console.log(tabInfo);
  });

  // Modify URL (xkcd.com -> explainxkcd.com)
  var URL = tabInfo.URL;

  // Open modified URL (explainxkcd.com)
}

// Add event listener
browser.pageAction.onClicked.addListener(handleClick);
