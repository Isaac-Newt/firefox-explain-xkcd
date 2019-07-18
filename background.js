/*
 * Author(s): Isaac List
 * Modified: 2019
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function handleClick() {
    // Get Active Tab URL
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});

    // Modify the URL
    gettingActiveTab.then((tabs) => {
        let tab = tabs[0];
        let url_regex = /\d+/;
        var comic_number = "";

        if (tab.url.match(url_regex)) {
            var comic_number = tab.url.match(url_regex)[0];
        }

        let newURL = "https://explainxkcd.com/" + comic_number;
        browser.tabs.create({
            "url": newURL
        });
    });
}

// Add event listener
browser.pageAction.onClicked.addListener(handleClick);
