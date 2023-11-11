const LINK = 'https://striveschool-api.herokuapp.com/api/product/'
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTA0MTI1NGU4ODAwMTgzZjE4NjUiLCJpYXQiOjE2OTk2MDI0OTcsImV4cCI6MTcwMDgxMjA5N30.uhqYWIoMloYMqF8_ehiAfaDV4ulDZ37VcyxV8VQ6Yoo"

let addBtn = document.querySelector('.addButton');
let resetButton = document.querySelector('.resetButton');

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    //PRENDO TUTTI I VALORI DEL FORM
    let name = document.querySelector('#validationCustom01').value;
    let description = document.querySelector('#validationCustom03').value;
    let brand = document.querySelector('#validationCustom02').value;
    let imageUrl = document.querySelector('#validationCustom04').value;
    let price = Number(document.querySelector('#validationCustom05').value);

    //li uso per costruire un oggetto da inviare al server
    class Phone {
        constructor(name, description, brand, imageUrl, price) {
            this.name = name;
            this.description = description;
            this.brand = brand;
            this.imageUrl = imageUrl;
            this.price = price;
        }
    }

    //faccio la fetch che invia i dati al server
    fetch(LINK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": KEY,
        },
        body: JSON.stringify(new Phone(name, description, brand, imageUrl, price))//i dati inviati vengono convertiti in json
    })
        .then(res => res.json())
        .then(phones => {

            Swal.fire({
                icon: "success",
                text: `Prodotto aggiunto correttamente!`
            }).then(() => { location.reload() });

        })

})

resetButton.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#validationCustom01').value = '';
    document.querySelector('#validationCustom02').value = '';
    document.querySelector('#validationCustom03').value = '';
    document.querySelector('#validationCustom04').value = '';
    document.querySelector('#validationCustom05').value = '';
});