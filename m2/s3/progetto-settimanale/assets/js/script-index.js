const LINK = 'https://striveschool-api.herokuapp.com/api/product/'
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTA0MTI1NGU4ODAwMTgzZjE4NjUiLCJpYXQiOjE2OTk2MDI0OTcsImV4cCI6MTcwMDgxMjA5N30.uhqYWIoMloYMqF8_ehiAfaDV4ulDZ37VcyxV8VQ6Yoo"


fetch(LINK, {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": KEY,
    }
})
    .then(res => res.json())
    .then(phones => {

        phones.forEach((phone, i) => {
            cloneTemplate()
            compilePhone(phone)
        })

    })

function cloneTemplate(nr = `0`) {
    const template = document.getElementsByTagName("template")[`${nr}`].content;
    const clone = template.cloneNode(true);
    const cloneContainer = document.getElementById(`target${nr}`);
    cloneContainer.appendChild(clone);
    return clone;
}


function compilePhone(phone) {
    const clone = document.querySelector('.card:last-of-type'); // Seleziona l'ultimo clone invece di utilizzare la classe .card
    const immagine = clone.querySelector('img');
    immagine.src = phone.img;
    console.log(immagine);
    const titolo = clone.querySelector('#nameProduct');
    titolo.innerHTML = phone.name;
    const prezzo = clone.querySelector('#priceProduct');
    prezzo.innerHTML = phone.price + '€';
    const description = clone.querySelector('#descriptionProduct');
    description.innerHTML = phone.description;
    const brandProduct = clone.querySelector('#brandProduct');
    brandProduct.innerHTML = phone.brand;
}