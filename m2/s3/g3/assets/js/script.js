class Libro {
    constructor(img,titolo,prezzo){
        this.img = img;
        this.titolo = titolo;
        this. prezzo = prezzo;
        this.cloneTemplate()
        this.compileCard()
        this.delete()
    }
    cloneTemplate() {
        const template = document.getElementsByTagName("template")[0].content;
    
        const clone = template.cloneNode(true);
    
        const cloneContainer = document.getElementById("containerTemplate");
    
        cloneContainer.prepend(clone);
    }

    compileCard() {
        let immagine = document.querySelector('img')
        immagine.src = this.img
        let titolo = document.querySelector('.card-title')
        titolo.innerHTML = this.titolo
        let prezzo = document.querySelector('.book-price')
        prezzo.innerHTML = this.prezzo + '€'

    }

    delete(){
        let buttonScarta = document.querySelector('.button-scarta')
        buttonScarta.addEventListener('click', function(){
            let card = document.querySelector('.card')
            card.remove()
        })
    }
    
}

fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(libri => {

        libri.forEach(element => {
            new Libro (element.img,element.title,element.price);

        });

    });