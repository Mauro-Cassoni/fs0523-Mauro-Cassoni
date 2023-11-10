let buttonLoadImage = document.querySelector('.buttonLoadImage')
let buttonLoadSecondary = document.querySelector('.buttonLoadSecondary')

buttonLoadImage.addEventListener('click', () => {
    let query = 'dog';
})


let query = 'japan';

let image = async (query) => {
    const res = await fetch("https://api.pexels.com/v1/search?query=" + query, {
        method: "GET",
        headers: {
            "Authorization": "F2tJ0wXPIwjrBwpi91zhoVkn07Trdc2mB5sCF8o6UGEcvp4vnZ3RROEs"
        }
    });

    const body = await res.json();

    if (Array.isArray(body.photos)) {
        body.photos.forEach(photo => {
            new Card(photo.src.tiny);
        });
    } else {
        console.error('I dati dell\'API non contengono un array di foto.');
    }

    console.log(body);
}

image(query);

class Card {
    constructor(img) {
        this.img = img;
        this.cloneTemplate();
        this.compileCard();
    }

    cloneTemplate() {
        const template = document.getElementsByTagName("template")[0].content;
        const clone = template.cloneNode(true);
        const cloneContainer = document.getElementById("containerTemplate");
        cloneContainer.appendChild(clone);
    }

    compileCard() {
        const cards = document.querySelectorAll('.card');
        const lastCard = cards[cards.length - 1];
        const immagine = lastCard.querySelector('img');
        immagine.src = this.img;
    }
}