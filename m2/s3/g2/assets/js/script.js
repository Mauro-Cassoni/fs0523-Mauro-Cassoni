let addButton = document.querySelector('#addButton');
let deleteButton = document.querySelector('#deleteButton');
let inputName = document.querySelector('#inputName');
let savedName = document.querySelector('#savedName');


addButton.addEventListener('click', function (event) {
    event.preventDefault()
    localStorage.setItem('nome', inputName.value)
    savedName.innerHTML = inputName.value
    inputName.value = ''
});

deleteButton.addEventListener('click', function (event) {
    event.preventDefault()
    localStorage.removeItem('nome');
    savedName.innerHTML = ''
});


const timerElement = document.getElementById("timer");

let seconds = sessionStorage.getItem("seconds") || 0;

function updateTimer() {
    seconds++;
    timerElement.textContent = seconds + " secondi";
    sessionStorage.setItem("seconds", seconds);
}

setInterval(updateTimer, 1000);

