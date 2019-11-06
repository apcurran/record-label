"use strict";

const navModule = (() => {
    const burgerIcon = document.querySelector(".burger-nav-icon");
    const nav = document.querySelector(".nav");
    const closeBtn = document.querySelector(".nav-section-close");

    function openNav(event) {
        nav.classList.remove("hide");
        nav.classList.add("nav-active");
    }

    function closeNav(event) {
        nav.classList.remove("nav-active");
    }

    burgerIcon.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);
    document.addEventListener("click", (event) => {
        if (event.target === burgerIcon) return;
        const isOutside = !event.target.closest(".nav");
        if (isOutside) closeNav();
    });
})();