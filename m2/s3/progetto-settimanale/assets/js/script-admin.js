const LINK = 'https://striveschool-api.herokuapp.com/api/product/'
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTA0MTI1NGU4ODAwMTgzZjE4NjUiLCJpYXQiOjE2OTk2MDI0OTcsImV4cCI6MTcwMDgxMjA5N30.uhqYWIoMloYMqF8_ehiAfaDV4ulDZ37VcyxV8VQ6Yoo"


function checkCredentials() {
    var emailInput = document.getElementById('exampleInputEmail1').value;
    var passwordInput = document.getElementById('exampleInputPassword1').value;

    // Verifica delle credenziali
    if (emailInput === '123@456.it' && passwordInput === '123456') {
        // Reindirizza alla pagina adminChoice.html
        window.location.href = 'adminChoice.html';
    } else {
        alert('Credenziali errate. Riprova.');
    }
}