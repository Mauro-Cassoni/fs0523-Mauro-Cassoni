let tabellone = document.querySelector('.tabellone');
let bottoneNumero = document.querySelector('.bottoneNumero');
let cartelle = document.querySelector('.cartelle')
let bottoneCartella = document.querySelector('.bottoneCartella')







let numeroC = cartelle.querySelectorAll('.numero-cartella');

for(i = 1; i <= 76; i++){
    let numero = document.createElement("div");
    numero.classList.add('numero-tabellone');
    numero.innerText = [i];
    tabellone.prepend(numero);
}

bottoneNumero.addEventListener('click', function(){
    let num = Math.floor(Math.random() * 76) + 1;
    for(i = 1; i <= 76; i++){
        let numeroT = tabellone.querySelectorAll('.numero-tabellone')[i];
        if(num == numeroT.textContent){
            numeroT.classList.add('estratto');
            numeroC.classList.add('estratto');
        }
    }
})

bottoneCartella.addEventListener('click', function(){
    let cartella = document.createElement('div');
    cartella.classList.add('cartella')
    cartelle.prepend(cartella)
    for(i = 1; i <= 24; i++){
        let numeroC = document.createElement("div");
        numeroC.classList.add('numero-cartella');
        let numC = Math.floor(Math.random() * 76) + 1;
        numeroC.innerText = numC;
        cartella.prepend(numeroC);
    }
})




