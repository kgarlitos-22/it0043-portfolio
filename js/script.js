const defaultSettings = {
    theme: "light",
    visitorName: "",
    lastVisit: null,
    menuState: "visible"
};

let settings = { ...defaultSettings };

try {
    const savedSettings = localStorage.getItem("siteSettings");

    if (savedSettings) {
        settings = {
            ...defaultSettings,
            ...JSON.parse(savedSettings)
        };
    }
} catch (error) {
    settings = { ...defaultSettings };
}

function saveSettings() {
    localStorage.setItem("siteSettings", JSON.stringify(settings));
}

if (settings.theme === "dark") {
    document.documentElement.classList.add("dark-mode");
}

settings.lastVisit = new Date().toISOString();
saveSettings();

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
    if (settings.menuState === "hidden") {
        mainNav.classList.add("is-hidden");
    }

    menuButton.addEventListener("click", function () {
        const menuIsHidden = mainNav.classList.toggle("is-hidden");

        settings.menuState = menuIsHidden ? "hidden" : "visible";
        saveSettings();
    });
}

const themeButton = document.querySelector("#theme-button");

function updateThemeButton() {
    if (!themeButton) {
        return;
    }

    if (settings.theme === "dark") {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
}

updateThemeButton();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        const darkModeIsActive =
            document.documentElement.classList.toggle("dark-mode");

        settings.theme = darkModeIsActive ? "dark" : "light";
        saveSettings();
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
        skillElement.textContent = skill.name;

        if (skill.category === "Strength") {
            strengthsColumn.append(skillElement);
        } else {
            improvementColumn.append(skillElement);
        }
    });

    skillsContainer.append(strengthsColumn, improvementColumn);
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");

        const nameError = document.querySelector("#name-error");
        const emailError = document.querySelector("#email-error");
        const messageError = document.querySelector("#message-error");
        const successMessage = document.querySelector("#success-message");

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let formIsValid = true;

        if (nameValue === "") {
            nameError.textContent = "Invalid input: name is required.";
            formIsValid = false;
        }

        if (emailValue === "") {
            emailError.textContent = "Invalid input: email is required.";
            formIsValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.textContent =
                "Invalid input: enter a valid email address.";
            formIsValid = false;
        }

        if (messageValue === "") {
            messageError.textContent = "Invalid input: message is required.";
            formIsValid = false;
        }

               if (formIsValid) {
            settings.visitorName = nameValue;
            saveSettings();

            successMessage.textContent =
                "Your message was submitted successfully!";

            contactForm.reset();
        }
    });
}