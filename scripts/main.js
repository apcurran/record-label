"use strict";

{
    // Show tabs
    const tabsUl = document.getElementById("tab-list");
    const panels = document.querySelectorAll(".panel");

    function showPanel(event) {
        if (event.target.tagName === "LI") {
            const selectedTab = event.target.dataset.panel;
            
            panels.forEach(panel => {
                const panelData = panel.dataset.panel;
                
                if (panelData === selectedTab) {
                    panel.classList.add("-showing");
                } else {
                    panel.classList.remove("-showing");
                }
            });


        }
        return;
    }

    tabsUl.addEventListener("click", showPanel);
}

{
    // Image slider
    const images = document.querySelectorAll(".sidebar-fig-img");

    // Debounce func borrowed from Underscore.js
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;

                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) func.apply(context, args);
        };
    };

    function imgSlideIn(event) {
        images.forEach(image => {
            const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 3);
            const isThirdShown = slideInAt > image.offsetTop;

            if (isThirdShown) {
                image.classList.add("slide-in");
            }
        });
    }

    window.addEventListener("scroll", debounce(imgSlideIn, 25));
}