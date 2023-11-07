let addButton = document.querySelector('#addButton');
let deleteButton = document.querySelector('#deleteButton');
let inputName = document.querySelector('#inputName');
let inputSurname = document.querySelector('#inputSurname');
let inputAge = document.querySelector('#inputAge');

class User{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

addButton.addEventListener('click', function () {
    
    localStorage.setItem('nome', inputName.value)
});

deleteButton.addEventListener('click', function () {
    localStorage.removeItem('nome');
});


const timerElement = document.getElementById("timer");

let seconds = sessionStorage.getItem("seconds") || 0;

function updateTimer() {
    seconds++;
    timerElement.textContent = seconds + " secondi";
    sessionStorage.setItem("seconds", seconds);
}

setInterval(updateTimer, 1000);

