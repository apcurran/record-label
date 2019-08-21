const navModule = (() => {
    const burgerIcon = document.querySelector(".burger-nav-icon");
    const nav = document.querySelector(".nav");
    const closeBtn = document.querySelector(".nav-section-close");

    function openNav(event) {
        nav.classList.add("nav-active");
    }

    function closeNav(event) {
        nav.classList.remove("nav-active");
    }

    burgerIcon.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);
})();