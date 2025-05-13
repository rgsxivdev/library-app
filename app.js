
// DOM Elements - Modal
const openModalBtn = document.querySelector('.openModal');
const modal = document.querySelector('#modal');
const addBookBtn = document.querySelector('#submit');
const closeModalBtn = document.querySelector('#closeModal');

// DOM Elements
const bookForm = document.querySelector('#bookForm');
const library = document.querySelector('#library');

// Data
const savedBooks = localStorage.getItem('userBooks');
const bookArray = savedBooks ? JSON.parse(savedBooks) : [];
// Local Storage




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

library.addEventListener('click', (e)=>{
    if (e.target.closest('.delete-btn')) {
        let bookId =  Number(e.target.parentElement.dataset.id);
        bookArray.splice(bookArray.findIndex(book => book.id === bookId), 1);
        deleteBookCard(e.target);

    }
})

library.addEventListener('click', (e)=>{
    let bookId =  Number(e.target.parentElement.dataset.id);
    if (e.target.closest('.toggle-read')) {
        e.target.classList.toggle('read')
        readStatus(bookId);
    }
})

// Book Class
class Book {
    constructor(title, author, pages, id, readStatus = false){ 
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = Date.now();
        this.readStatus = readStatus;
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
    localStorage.setItem('userBooks',JSON.stringify(bookArray))
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
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.innerHTML = html;
        bookCard.setAttribute('data-id', book.id);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        const toggleRead = document.createElement('button');
        toggleRead.classList.add('toggle-read');
        toggleRead.textContent = 'Read';
        toggleRead.textContent = book.toggleRead ? "Read" : "Not Read";
        library.append(bookCard);
        bookCard.append(toggleRead);
        library.append(bookCard);
        bookCard.append(deleteBtn);
    })
}

function deleteBookCard(card){
    card.closest('.bookCard').remove();
}


function loadBooks(){
    renderLibrary();
}

function readStatus(bookId) {
const book = bookArray.find(book => book.bookId === book.bookId)
book.readStatus = !book.readStatus;
}

loadBooks();