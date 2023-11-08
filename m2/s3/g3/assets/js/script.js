class Libro {
    constructor(img, titolo, prezzo) {
        this.img = img;
        this.titolo = titolo;
        this.prezzo = prezzo;
        this.cloneTemplate();
        this.compileCard();
        this.delete();
    }
    
    cloneTemplate() {
        const template = document.getElementsByTagName("template")[0].content;
        const clone = template.cloneNode(true);
        const cloneContainer = document.getElementById("containerTemplate");
        cloneContainer.appendChild(clone);
    }

    compileCard() {
        const card = document.querySelector('.card:last-of-type');
        const immagine = card.querySelector('img');
        immagine.src = this.img;
        const titolo = card.querySelector('.card-title');
        titolo.innerHTML = this.titolo;
        const prezzo = card.querySelector('.book-price');
        prezzo.innerHTML = this.prezzo + '€';
    }

    delete() {
        const card = document.querySelector('.card:last-of-type');
        const buttonScarta = card.querySelector('.button-scarta');
        buttonScarta.addEventListener('click', function() {
            card.remove();
        });
    }
}

fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(libri => {

        libri.forEach(element => {
            new Libro (element.img,element.title,element.price);

        });

    });