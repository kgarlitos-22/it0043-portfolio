const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
    const savedMenuState = localStorage.getItem("menuState");

    if (savedMenuState === "hidden") {
        mainNav.classList.add("is-hidden");
    } else {
        mainNav.classList.remove("is-hidden");
    }

    menuButton.addEventListener("click", function () {
        const menuIsHidden = mainNav.classList.toggle("is-hidden");

        if (menuIsHidden) {
            localStorage.setItem("menuState", "hidden");
        } else {
            localStorage.setItem("menuState", "visible");
        }
    });
}