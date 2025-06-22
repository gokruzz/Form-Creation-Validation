Setup and Initial Code Structure
Start with DOMContentLoaded Event:

Wrap your entire script in a DOMContentLoaded event listener. This ensures your JavaScript runs after the entire HTML document has been loaded.
Form Selection:

Use document.getElementById to select the form with id="registration-form". Store this reference in a constant named form.
Feedback Division Selection:

Similarly, select the division where feedback will be displayed (id="form-feedback") and store it in a constant named feedbackDiv.
Form Submission and Event Prevention
Form Submission Event Listener:
Add an event listener to form for the ‘submit’ event. Use an anonymous function to handle the event.
Inside this function, call event.preventDefault() to prevent the form from submitting to the server. This is crucial for client-side validation.
Input Retrieval and Trimming
Retrieve User Inputs:
Use document.getElementById to select each input field by its respective ID: username, email, and password.
For each, retrieve the .value property and apply the .trim() method to remove any leading or trailing whitespace. Store these trimmed values in constants named after each input field.
Validation Logic
Initialize Validation Variables:

Declare a variable named isValid and set it to true. This will track the overall validation status.
Declare an array named messages to store validation error messages.
Username Validation:

Check if username.length is less than 3. If so, set isValid to false and add a specific error message to messages.
Email Validation:

Check if email includes both ‘@’ and ‘.’ characters. If not, set isValid to false and append a corresponding error message to messages.
Password Validation:

Ensure password.length is at least 8. If it falls short, update isValid to false and add an appropriate error message to messages.
Displaying Feedback
Feedback Display Logic:
Make feedbackDiv visible by setting its style.display to "block".
If isValid remains true, set the textContent of feedbackDiv to "Registration successful!" and its style.color to "#28a745".
If isValid is false, join messages with <br> to form a single string, and assign this to the innerHTML of feedbackDiv. Set feedbackDiv.style.color to "#dc3545".
