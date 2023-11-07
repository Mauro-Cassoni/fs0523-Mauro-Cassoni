class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    diffAge(obj){
        if (this.age > obj.age) {
            console.log(`${this.firstName} è più vecchio di ${obj.firstName}.`);
        } else if (this.age < obj.age) {
            console.log(`${this.firstName} è più giovane di ${obj.firstName}.`);
        } else {
            console.log(`${this.firstName} ed ${obj.firstName} hanno la stessa età.`);
        }
    }
}

let mario = new User('Mario', 'Rossi', 30, 'Roma');
let luigi = new User('Luigi', 'Verdi', 35, 'Milano');
let sebastiano = new User('Sebastiano', 'Gialli', 25, 'Napoli');

mario.diffAge(luigi);
mario.diffAge(sebastiano);
sebastiano.diffAge(mario);


class Pet {
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(obj){
        if (this.ownerName === obj.ownerName) {
            console.log(true);
            return true
        }else {
            console.log(false);
            return false
        }
    }
}

let vasco = new Pet('vasco', 'Mario', 'cane', 'carlino');
let rex = new Pet('rex', 'Mario', 'cane', 'pastore tedesco');
let yoda = new Pet('yoda', 'Luigi', 'gatto', 'siamese');

vasco.sameOwner(rex);
vasco.sameOwner(yoda);

const petForm = document.getElementById('petForm');
        const petTable = document.getElementById('petTable');

        // Aggiungi un evento di click al pulsante di invio
        let submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', function() {
            const petName = document.getElementById('petName').value;
            const ownerName = document.getElementById('ownerName').value;
            const species = document.getElementById('species').value;
            const breed = document.getElementById('breed').value;

            // Crea un oggetto Pet con i dati del form
            const newPet = new Pet(petName, ownerName, species, breed);

            // Aggiungi una riga alla tabella con i dati del nuovo Pet
            const newRow = petTable.insertRow(-1);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            cell1.textContent = newPet.petName;
            cell2.textContent = newPet.ownerName;
            cell3.textContent = newPet.species;
            cell4.textContent = newPet.breed;

            // Resetta il form
            petForm.reset();
        });
