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
    }

    tabsUl.addEventListener("click", showPanel);
}

{
    // Image slider
    const images = document.querySelectorAll(".sidebar-fig-img");

    function debounce(func, ms) {
        let isCooldown = false;

        return function() {
            if (isCooldown) return;

            func.apply(this, arguments);
            isCooldown = true;

            setTimeout(() => isCooldown = false, ms);
        }
    }

    function imgSlideIn(event) {
        images.forEach(image => {
            const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 3);
            const isThirdShown = slideInAt > image.offsetTop;

            if (isThirdShown) {
                image.classList.add("slide-in");
            }
        });
    }

    window.addEventListener("scroll", debounce(imgSlideIn, 20));
}