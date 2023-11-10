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
}


function compilePhone(phone){
const card = document.querySelector('.card:last-of-type');
const immagine = card.querySelector('img');
immagine.src = phone.img;
const titolo = card.querySelector('#nameProduct');
titolo.innerHTML = phone.name;
const prezzo = card.querySelector('#priceProduct');
prezzo.innerHTML = phone.price + '€';
const description = card.querySelector('#descriptionProduct');
description.innerHTML = phone.description;
const brandProduct = card.querySelector('#brandProduct');
brandProduct.innerHTML = phone.brand;
}