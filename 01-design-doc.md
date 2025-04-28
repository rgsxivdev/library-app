# Library App (Fauxreads)

## Objective:
Build a simple app where users can complete a form to log books they've read or plan to read. Each book will display as a card containing key information, and users can delete entries, mark/unmark books as read

## Major Features
- Enter book information to display the book as a card
  - Fields included:
    - Title (Text input required)
    - Author (Text input, required)
    - Genre (Text input)
    - Publication Year (Number input)
    - Number of Pages (Number input)
    - Status (Dropdown: "Read", "Plan to Read", default: "Plan to Read")
- Delete book card
  - Each card will have a clearly visible button to delete the card.(e.g., an "X" icon)
  - Clicking the button will remove the card from the page as well as the underlying data and re-render the page.

## Potential Additions
- Sort books by various criteria
- Upload an image to wrap around the book card
  - imgur api maybe?
- Implement localstorage
- Rate the book on a star rating scale of 5
- Leave a review/memo per book

## User Flow
- User is greeted with any existing books they have already entered
- User clicks on  the button at the bottom right to open a modal that contains a form to fill out
- Once the form is submitted, a new card is created on the webpage
- User can mark the book read/unread
- user can delete a book card if desired

## Potential Problems
