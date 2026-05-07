(function () {
    "use strict";

    var toggle = document.querySelector(".menu-toggle");
    var navList = document.querySelector(".nav-links");

    if (!toggle || !navList) return;

    function setOpen(open) {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        navList.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
        var expanded = toggle.getAttribute("aria-expanded") === "true";
        setOpen(!expanded);
    });

    navList.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setOpen(false);
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });
})();
