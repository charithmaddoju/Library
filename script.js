function Book(title,author,pages,isRead){
    this.title = title;
    this.author = author,
    this.pages = pages,
    this.isRead = true;
    this.info = function(){
        return `${title} by ${author}, ${pages}, ${isRead}`
    }
}

let myLibrary = [];

function addBookToLibrary(title,author,pages){
    const book = new Book(title,author,pages,true);
    myLibrary.push(book);
}
// const theHobbit = new Book("The Hobbit","J.R.R. Tolkien", 295, false)

// console.log(theHobbit.info());

const addbook = document.querySelector('.addbook')
const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('.form');

const card = document.createElement('div');
const cardTitle = document.createElement('div')
const cardAuthor = document.createElement('div')
const cardPages = document.createElement('div')

addbook.addEventListener('click',(e) => {
    e.preventDefault;
    form.style.display = "grid";


    const formTitle = document.querySelector('.form-title');
    const formAuthor = document.querySelector('form-author');
    const formPages = document.querySelector('form-pages');
    const formSubmit = document.querySelector('.form-submit');
    const formReset = document.querySelector('.form-reset');

    formSubmit.addEventListener('click',(e) => {
        form.style.display = "none";
        title = formTitle;
        author = formAuthor;
        pages = formPages;

        addBookToLibrary(title,author,pages,true)

        
        

    })
})




