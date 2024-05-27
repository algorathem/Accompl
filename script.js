// (() => {
//     const updateButton = document.getElementById("updateDetails");
//     const cancelButton = document.getElementById("cancel");
//     const dialog = document.getElementById("favDialog");
//     dialog.returnValue = "favAnimal";

//     function openCheck(dialog) {
//       if (dialog.open) {
//         console.log("Dialog open");
//       } else {
//         console.log("Dialog closed");
//       }
//     }

//     // Update button opens a modeless dialog
//     updateButton.addEventListener("click", () => {
//       dialog.show();
//       openCheck(dialog);
//     });

//     // Form cancel button closes the dialog box
//     cancelButton.addEventListener("click", () => {
//       dialog.close("animalNotChosen");
//       openCheck(dialog);
//     });
//   })();'

const form = document.getElementById('add-form');
const library = document.querySelector('#book-container');

let read = false;
const myLibrary = [];

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    addBookToLibrary();
    form.reset();  
    displayBooks();
})

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    // do stuff here
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const addedBook = new Book(title, author, pages);
    myLibrary.push(addedBook);
}

function displayBooks() {
        library.innerHTML = '';
        myLibrary.forEach((book, index)=> {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.width = '18rem';

        div.innerHTML = 
        `
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-subtitle mb-2 text-body-secondary"><strong>Author:</strong> ${book.author}</p>
            <p class="card-text"><strong>Page(s):</strong> ${book.pages}</p>
            <button class="btn btn-danger" onclick="remove(${index})">Remove</button>
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input class="btn-check" type="checkbox" id="${book.title}" autocomplete="off">
                <label class="btn btn-outline-success" for="${book.title}">Read</label>
            </div>
        </div>
        `
        library.appendChild(div);
    })
}

function remove(index) {
    myLibrary.splice(index, 1);
    displayBooks()
}