try {
    const savedSettings = localStorage.getItem("siteSettings");

    if (savedSettings) {
        const settings = JSON.parse(savedSettings);

        if (settings.theme === "dark") {
            document.documentElement.classList.add("dark-mode");
        }
    }
} catch (error) {
    document.documentElement.classList.remove("dark-mode");
}