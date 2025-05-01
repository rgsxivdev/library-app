// Dom Elements
const openModalBtn = document.querySelector('.openModal');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookCover = document.querySelector('#cover');
const submitBookBtn = document.querySelector('#submit');
const libraryDiv = document.querySelector('#library');
// Data
const bookArray = [];


openModalBtn.addEventListener('click', ()=>  addClass(modal))
closeModal.addEventListener('click', ()=> removeClass(modal))
submitBookBtn.addEventListener('click', e=>{
    e.preventDefault();
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value);
    renderLibrary();
})


function addClass(el, className = 'show'){
    if (!el.classList.contains(className)){
        el.classList.add(className);
    }
}

function removeClass(el, className = 'show'){
    if (el.classList.contains(className)){
        el.classList.remove(className);
    }
}

function addBookToLibrary(title, author, pages){
    bookArray.push({title: title, author: author, pages: pages})
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    removeClass(modal);
}

function renderLibrary(){
    libraryDiv.textContent = '';

    bookArray.forEach((book, index) =>{
        const bookDiv = document.createElement("div");
        addClass(bookDiv, 'book');
        libraryDiv.appendChild(bookDiv);
        bookDiv.innerHTML = `<div class="title">title:${book.title}</div>
    <div class="author">Author:${book.author}</div>
    <div class="pages">Pages: ${book.pages}</div>`

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        addClass(deleteBtn, 'delete-btn')

        deleteBtn.addEventListener('click', () => {
            deleteBook(index);
        });

        bookDiv.appendChild(deleteBtn);
    })
}

function deleteBook(index){
    bookArray.splice(index,1);
    renderLibrary();
}