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

const themeButton = document.querySelector("#theme-button");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

function updateThemeButton() {
    if (!themeButton) {
        return;
    }

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
}

updateThemeButton();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        const darkModeIsActive = document.body.classList.toggle("dark-mode");

        if (darkModeIsActive) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateThemeButton();
    });
}