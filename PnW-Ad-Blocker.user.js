// ==UserScript==
// @name         PnW-Ad-Blocker
// @namespace    https://politicsandwar.com/nation/id=426176
// @version      2025-05-18
// @description  Ad blocker for pnw
// @author       DeterminedGeneral
// @match        https://politicsandwar.com/*
// @icon         https://i.imgur.com/F7M4k01.jpeg
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
    .container > .row #rightcolumn .hidden-xs.alert.alert-info,
    .container > .row #rightcolumn .visible-xs {
        display: none !important;
    }
    `;
    document.head.appendChild(style);
})();
