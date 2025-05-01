
// DOM Elements - Modal
const openModalBtn = document.querySelector('.openModal');
const modal = document.querySelector('#modal');
const addBookBtn = document.querySelector('#submit');
const closeModalBtn = document.querySelector('#closeModal');

// DOM Elements
const bookForm = document.querySelector('#bookForm');
const library = document.querySelector('#library');

// Data
const bookArray = [];

// Event Listeners
openModalBtn.addEventListener('click', ()=>{
    modal.classList.add('show');
})
closeModalBtn.addEventListener('click', ()=>{
    modal.classList.remove('show');
})
addBookBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addBookToArray();
    modal.classList.remove('show');
} )

// Book Class
class Book {
    constructor(title, author, pages, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = Date.now();
    }
}

// Grab input data from the modal form and push it into the bookArray.
function addBookToArray(){
    const bookData = new FormData(bookForm);
    const author = bookData.get('author');
    const title = bookData.get('title');
    const pages = bookData.get('pages');
    const newBook = new Book(title, author, pages);
    bookArray.push(newBook);

    bookForm.reset();
    renderLibrary();
}

// Re-render the library div whenever a new book is added to bookArray
function renderLibrary(){
    library.innerHTML = '';
    bookArray.forEach(book =>{
        const html = `
        <div class="title">${book.title}</div>
        <div class="title">${book.author}</div>
        <div class="title">${book.pages}</div>
`
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e)=>{
            let bookId =  Number(e.target.parentElement.dataset.id);
            bookArray.splice(bookArray.findIndex(book => book.id === bookId), 1);
            renderLibrary();
        })
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.innerHTML = html;
        bookCard.setAttribute('data-id', book.id);



        library.append(bookCard);
        bookCard.append(deleteBtn);
    })
}
