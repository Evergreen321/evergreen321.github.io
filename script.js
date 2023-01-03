"use strict";

// DYNAMIC COPYRIGHT TEXT
const copyright = document.querySelector(".copyright-text");
const currentYear = new Date().getFullYear();

copyright.textContent = `Copyright \u00A9 ${currentYear}. All rights reserved.`;
