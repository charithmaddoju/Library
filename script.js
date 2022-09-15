
class Book{
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

}

const addbook = document.querySelector('.addbook');
const books_container = document.querySelector('.books-container');

addbook.addEventListener('click', onSubmit);

function onSubmit(e){
    const div = document.createElement('div');
    const form = document.createElement('form');
    const title_label = document.createElement('label');
    const title_input = document.createElement('input');
    const author_label = document.createElement('label');
    const author_input = document.createElement('input');
    const pages_label = document.createElement('label');
    const pages_input = document.createElement('input');



    title_label.textContent = "Title";
    author_label.textContent = "Author";
    pages_label.textContent = "Pages";

    form.append(title_label,title_input,author_label,author_input,pages_label,pages_input);
    div.appendChild(form);
    books_container.appendChild(div);

    for(const item of form){
        item.classList.add("inside-form")
    }

    

    form.style.display = "grid";
    div.style.background = "lightgreen";
    div.style.borderRadius = "0.8em";
    div.style.borderLeft = "10px solid black"
    div.style.width = "300px";
    div.style.height = "300px";

    
}



