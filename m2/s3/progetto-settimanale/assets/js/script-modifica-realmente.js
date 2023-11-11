const LINK = 'https://striveschool-api.herokuapp.com/api/product/'
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTA0MTI1NGU4ODAwMTgzZjE4NjUiLCJpYXQiOjE2OTk2MDI0OTcsImV4cCI6MTcwMDgxMjA5N30.uhqYWIoMloYMqF8_ehiAfaDV4ulDZ37VcyxV8VQ6Yoo"

let url = new URLSearchParams(location.search);
let selectedID = url.get("id");

let addBtn = document.querySelector('.addButton');
let resetButton = document.querySelector('.resetButton');

getPhoneById(selectedID);

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    //PRENDO TUTTI I VALORI DEL FORM
    let name = document.querySelector('#validationCustom01').value;
    let description = document.querySelector('#validationCustom03').value;
    let brand = document.querySelector('#validationCustom02').value;
    let imageUrl = document.querySelector('#validationCustom04').value;
    let price = Number(document.querySelector('#validationCustom05').value);
    let newPhone = new Phone(name, description, brand, imageUrl, price);
    saveMod(selectedID, newPhone)

});

function getPhoneById(selectedID) {
    fetch(`${LINK}${selectedID}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        }
    }).then(res => res.json())
        .then(phone => {
            console.log(phone);
            getDatiPhone(phone);
        })
}

function getDatiPhone(phone) {
    document.querySelector('#validationCustom01').value = phone.name;
    document.querySelector('#validationCustom03').value = phone.description;
    document.querySelector('#validationCustom02').value = phone.brand;
    document.querySelector('#validationCustom04').value = phone.imageUrl;
    document.querySelector('#validationCustom05').value = phone.price;
}

function saveMod(phone_id, phone) {
    fetch(`${LINK}${phone_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        },
        body: JSON.stringify(phone)
    }).then(res => {
        if (res.status == 200) {
            Swal.fire({
                icon: "success",
                text: `Dati caricati correttamente!`
            }).then(() => { location.href = `modifica.html`});
        } else {
            Swal.fire({
                icon: "error",
                title: "Attenzione!",
                text: `Inserire dati validi!`
            });
        }
    })
}

//li uso per costruire un oggetto da inviare al server
class Phone {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
};