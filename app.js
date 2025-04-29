const addBookBtn = document.querySelector('.fab');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const form = document.querySelector('#bookForm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const bookList = document.querySelector('.book-list');
const book = document.createElement('div');
const library = [
    {
        title: 'The Hobbit',
        author: '<NAME>',
        pages: 300,
        read: false,
    }
];

book.classList.add('book');
addBookBtn.addEventListener('click', () => {
    modal.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('show');
})