const link = 'https://striveschool-api.herokuapp.com/api/product/'
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTA0MTI1NGU4ODAwMTgzZjE4NjUiLCJpYXQiOjE2OTk2MDI0OTcsImV4cCI6MTcwMDgxMjA5N30.uhqYWIoMloYMqF8_ehiAfaDV4ulDZ37VcyxV8VQ6Yoo"

let saveBtn = document.querySelector('.save');

saveBtn.addEventListener('click', function (e) {

e.preventDefault();

//PRENDO TUTTI I VALORI DEL FORM
let name = document.querySelector('#gusto').value;
let description = Number(document.querySelector('#prezzo').value);
let brand = Boolean(document.querySelector('#disponibile').value);
let imageUrl = Boolean(document.querySelector('#disponibile').value);
let price = Boolean(document.querySelector('#disponibile').value);

//li uso per costruire un oggetto da inviare al server
let newPhone = {
name,
description,
brand,
imageUrl,
price
}

//faccio la fetch che invia i dati al server
fetch('https://striveschool-api.herokuapp.com/api/product/', {
method: 'POST',
headers: {
"Authorization": key,
'Content-Type': 'application/json'
},
body: JSON.stringify(newPhone)//i dati inviati vengono convertiti in json
})
.then(res => res.json())
.then(phones => {

//ho deciso di fare un redirect se la pizza viene creata correttamente, potevo anche mostrare un avviso
location.href = '/lista.html'

})


})




fetch(link, {
headers: {
"Authorization": key
}
})