/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Get current active tab
var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then((tabs) => {
  console.log("Hello");
});

// Pseudo-code:

/*

var activetab = get active tab();

if (activeTab.URL[0-15] == https://xkcd.com/) {
  show pageaction button ();
}

function onPageActionClicked() {
  var url = get current URL
}

*/
