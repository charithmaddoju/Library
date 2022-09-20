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

const addbook = document.querySelector('.addbook');
const form = document.querySelector('.form')
const formTitle = document.querySelector('.form-title');
const formAuthor = document.querySelector('.form-author');
const formPages = document.querySelector('.form-pages');
const formSubmit = document.querySelector('.form-submit');
const bookshelf = document.querySelector('.bookshelf');
const flag = 0;

addbook.addEventListener('click', function(e){

    
    form.style.display = "grid";

    formSubmit.addEventListener('click', function(e){

        let card = document.createElement('div');
        let cardTitle = document.createElement('div');
        let cardAuthor = document.createElement('div');
        let cardPages = document.createElement('div');

        cardTitle.innerText = formTitle.value
        cardAuthor.innerText = formAuthor.value 
        cardPages.innerText = formPages.value    

        cardTitle.classList.add('block');
        cardAuthor.classList.add('block');
        cardPages.classList.add('block');
        
        card.append(cardTitle);
        card.append(cardAuthor);
        card.append(cardPages);

        bookshelf.append(card);
        form.style.display = "none"
    })
    
})






