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

const skillsContainer = document.querySelector("#skills-container");

if (skillsContainer) {
    const skills = [
        { name: "Scriptwriting", category: "Strength" },
        { name: "Traditional Drawing", category: "Strength" },
        { name: "Programming", category: "Area for Improvement" },
        { name: "Digital Drawing", category: "Area for Improvement" },
        { name: "HTML", category: "Area for Improvement" },
        { name: "CSS", category: "Area for Improvement" },
        { name: "JavaScript", category: "Area for Improvement" },
        { name: "Toon Boom", category: "Area for Improvement" },
        { name: "Photoshop", category: "Area for Improvement" },
        { name: "Illustrator", category: "Area for Improvement" },
        { name: "Git", category: "Area for Improvement" }
    ];

    skillsContainer.replaceChildren();

    if (skills.length === 0) {
        skillsContainer.textContent =
            "No items are available to display at the moment.";
    } else {
        const strengthsColumn = document.createElement("section");
        strengthsColumn.className = "skill-column";

        const improvementColumn = document.createElement("section");
        improvementColumn.className = "skill-column";

        const strengthsHeading = document.createElement("h3");
        strengthsHeading.textContent = "My Strengths";

        const improvementHeading = document.createElement("h3");
        improvementHeading.textContent = "Areas for Improvement";

        strengthsColumn.append(strengthsHeading);
        improvementColumn.append(improvementHeading);

        skills.forEach(function (skill) {
            const skillElement = document.createElement("p");

            if (!skill.name || !skill.category) {
                skillElement.textContent = "Invalid input";
                improvementColumn.append(skillElement);
            } else if (skill.category === "Strength") {
                skillElement.textContent = skill.name;
                strengthsColumn.append(skillElement);
            } else {
                skillElement.textContent = skill.name;
                improvementColumn.append(skillElement);
            }
        });

        skillsContainer.append(strengthsColumn, improvementColumn);
    }
}