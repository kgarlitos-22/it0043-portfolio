# M6 Project Structure

## Before

Each HTML file loaded the stylesheet and the main JavaScript file:

html
<link rel="stylesheet" href="styles.css">
<script src="js/script.js" defer></script>

<script src="js/theme-init.js"></script>
<link rel="stylesheet" href="styles.css">
<script src="js/script.js" defer></script>

## After

<script src="js/theme-init.js"></script>
<link rel="stylesheet" href="styles.css">
<script src="js/script.js" defer></script>

## Reasons for changes

theme-init.js restores the saved theme before the page becomes visible. This prevents a flash of the wrong theme when a page loads. The same script links are used in every HTML file so all pages behave consistently. script.js remains deferred because it contains the main page interactions. The JavaScript files are kept inside the js folder and separated by role.