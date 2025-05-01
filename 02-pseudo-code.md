## Fauxreads


- User clicks the "Add Book" button
    - Add the `show` class to the modal to make it visible
- User fills out the form inside the modal
- User submits the form by clicking the submit button
- The submit button does the following:
    - Create a new book object using the form data
      - maybe use an object constructor
    - Add the new book object to the main `library` array
    - Clear the form inputs
    - Hide the modal (remove `show` class)
- The book now displays on the webpage along with the information from the form.
- The user can click the delete button to remove the entry from the array and the webpage.
- The user can click the read/not read button to toggle the status of that button.


TODO:
- Local storage
- Toggle button