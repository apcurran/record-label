"use strict";

const tabsModule = (() => {
    const tabsUl = document.getElementById("tab-list");
    const tabs = document.querySelectorAll(".tab-list-tab");

    function showPanel(event) {
        if (event.target.classList.contains(".tab-list-tab")) {
            console.log("You clicked a tab!");
        }
    }

    tabsUl.addEventListener("click", showPanel);


})();