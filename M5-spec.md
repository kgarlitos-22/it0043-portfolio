Pre-code specification and pseudocode
Initial Pseudocode

1. Navigation Toggle

1. Find the menu button.
2. Find the navigation menu.
3. When the menu button is clicked:
   a. Check whether the navigation menu is visible.
   b. If the menu is hidden, show it.
   c. If the menu is visible, hide it.

2. Dark Mode

1. Find the dark mode toggle button.
2. When the page loads, set the initial theme to light mode.
3. When the dark mode button is clicked:
   a. Check the current theme.
   b. If light mode is active, apply dark mode.
   c. If dark mode is active, apply light mode.
4. Update the background and text colors when the theme changes.

3. Dynamic Content From an Array

1. Find the content container.
2. Read the array of data.
3. Check whether the array is empty.
4. If the array is empty, display a fallback message.
5. If the array has items:
   a. Go through each item in the array.
   b. Create an element for the item.
   c. Add the item’s information to the element.
   d. Insert the element into the content container.

4. Contact Form Validation

1. Find the contact form.
2. Find each required input field.
3. Find the error message area beside each field.
4. Detect when the form is submitted.
5. Prevent the form from submitting immediately.
6. Check each required field.
7. If a field is empty or invalid:
   a. Display a specific error message beside that field.
   b. Keep the form from being submitted.
8. If all fields are valid:
   a. Remove the error messages.
   b. Display a successful submission message.

Revisions prompted by the AI's questions.
# **1. Navigation Toggle**



**Trigger**

* The user clicks the navigation menu toggle button.



**Expected DOM Change**

* Navigation menu will become visible if it is hidden.
* Navigation menu will become hidden if it is visible.
* The selected menu state is remembered even after the page is refreshed.
* Clicking a navigation link does not automatically close the menu.
* The menu remains open when the browser is resized.

###### 

**Edge Cases**

* The user might click the button repeatedly.
* The menu might already be open.
* The menu might not be able to load properly.
* The menu might be incorrect when the page first loads.
* The navigation menu might be missing.
* User selects a navigation link while the menu is open.
* Browser is resized while the menu is open.



**Pseudocode**

1\. Find the navigation toggle button.

2\. Find the navigation menu.

3\. If the toggle button or navigation menu does not exist, stop the navigation logic without crashing the page.

4\. Read the user’s saved menu preference.

5\. If a saved preference exists, apply it to the navigation menu.

6\. If no saved preference exists, use the menu’s default state.

7\. When the toggle button is clicked:

&#x20;  1. Check whether the menu is currently visible.

&#x20;  2. If the menu is visible, hide it.

&#x20;  3. If the menu is hidden, show it.

&#x20;  4. Save the updated menu state.

8\. Keep the menu’s current state when the browser is resized.

9\. Do not automatically close the menu when a navigation link is clicked.



# **2. Dark Mode**



**Trigger**

Initial state: Light mode is active when the page loads.

* The user clicks the dark mode toggle button.



Expected DOM Change

* The page switches between light mode and dark mode.
* The background and text colors update according to the selected theme.
* The toggle button’s text or icon changes to show the current theme.
* The selected theme remains active after the page is refreshed.
* The dark mode toggle button appears on every page.



**Edge Cases**

* The user may switch between themes repeatedly.
* The user may click the toggle button several times.
* Only two themes are available which are light and dark mode.
* If no saved theme exists, light mode is used by default.
* If the saved theme is invalid, light mode is used as the fallback.
* If the toggle button is missing, the page should still load without crashing.



**Pseudocode**

1\. Find the dark mode toggle button.

2\. If the button does not exist, stop the dark mode logic without crashing the page.

3\. Read the user’s saved theme preference.

4\. If the saved preference is dark, apply dark mode.

5\. If the saved preference is light, apply light mode.

6\. If there is no saved or valid preference, apply light mode by default.

7\. Update the button’s text or icon to match the current theme.

8\. When the toggle button is clicked:

&#x20;  1. Check whether the current theme is light or dark.

&#x20;  2. If the current theme is light, switch to dark mode.

&#x20;  3. If the current theme is dark, switch to light mode.

&#x20;  4. Update the button’s text or icon.

&#x20;  5. Save the selected theme preference.

9\. Allow the saved theme to remain active after the page is refreshed.

10\. Allow the user to choose only between light mode and dark mode.



# **3. Dynamic Content From an Array**



**Trigger**

* Page will load.



Expected DOM Change

* Items from the array will be displayed on the page.
* Might make changes inside the existing container for new elements.
* Portfolio project information from an array of objects is displayed inside the content container.
* Each project is displayed as its own content element.
* The existing content container is cleared before rendering to prevent duplicates.
* If the array is empty, display "No items are available to display at the moment".



**Edge Cases**

* Array might be empty.
* Array might only contain one item.
* The array may contain many projects.
* Some item values might be missing.
* If a project contains missing information, display "Invalid input"
* If the content container is missing, the page should still load without crashing.
* Array may contain a large number of items.
* Item may contain invalid data.
* Content is added multiple times, causing duplicates.
* Array might contain unexpected data types.
* The array should be rendered using an array method.
* The same projects should not be added more than once.



**Pseudocode**

1\. Find the content container.

2\. If the content container does not exist, stop the rendering logic without crashing the page.

3\. Create an array of portfolio project objects.

4\. Check whether the array is empty.

5\. If the array is empty, display:

&#x20;  "No items are available to display at the moment."

6\. If the array contains projects, clear the content container.

7\. Go through each project in the array using an array method.

8\. Check whether the project contains all required information.

9\. If information is missing, display:

&#x20;  "Invalid input"

10\. If the project information is valid, create a display element for the project.

11\. Add the project’s title, description, and category to the display element.

12\. Insert the display element into the content container.

13\. Make sure the projects are not added more than once.



# **4. Contact Form Validation**



**Trigger**

* The user will submit the form.



**Expected DOM Change**

* Error messages might appear for invalid inputs.
* Each required field is checked individually.
* Form submission may proceeds only when inputs are valid.
* The form submission is prevented temporarily.
* A specific error message appears next to each invalid field.
* The form is not successfully submitted if any field is invalid.
* When all fields are valid, display a message like "Your message was submitted successfully!"
* Error messages are removed or updated when the user corrects the input and submits again.



**Required Fields**

* Name
* Email
* Message



**Error Messages**

* Empty name: "Name is required."
* Empty email: "Email is required."
* Invalid email: "Please enter a valid email address.
* Empty message: "Message is required."



**Edge Cases**

* Empty fields.
* Inputs may contain only spaces.
* Invalid email format.
* Inputs containing only spaces.
* User corrects an error and submits again.
* One field may be valid while another may not be.
* Multiple fields may be invalid simultaneously.
* User may correct invalid input.
* The user may submit the form repeatedly.
* Error messages must appear beside their corresponding fields, never as one generic alert.



**Pseudocode**

1\. Find the contact form.

2\. Find the name, email, and message fields.

3\. Find the error message area beside each field.

4\. If the form or required fields are missing, stop the validation logic without crashing the page.

5\. When the form is submitted:

&#x20;  1. Prevent the form’s default submission behavior.

&#x20;  2. Clear any previous error messages.

&#x20;  3. Remove extra spaces from the field values.

&#x20;  4. Check whether the name field is empty.

&#x20;  5. If the name is empty, display "Name is required." beside the name field.

&#x20;  6. Check whether the email field is empty.

&#x20;  7. If the email is empty, display "Email is required." beside the email field.

&#x20;  8. If the email is not empty, check whether it has a valid email format.

&#x20;  9. If the email format is invalid, display "Please enter a valid email address." beside the email field.

&#x20;  10. Check whether the message field is empty.

&#x20;  11. If the message is empty, display "Message is required." beside the message field.

6\. If one or more fields are invalid, keep the error messages visible and do not show the success message.

7\. If all fields are valid, display:

&#x20;  "Your message was submitted successfully!"

8\. Allow the user to correct the fields and submit the form again.

