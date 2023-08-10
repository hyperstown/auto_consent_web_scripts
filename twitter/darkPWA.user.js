// ==UserScript==
// @name         Tweeter background fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enables dark background in tweeter
// @author       You
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var m = document.head.querySelector("link[rel='manifest']");
    m.href = "https://raw.githubusercontent.com/hyperstown/web_scripts/main/twitter/manifest.json";
    m.crossOrigin = "";
})();
