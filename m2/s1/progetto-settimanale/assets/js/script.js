window.addEventListener("scroll",function(){
    let top = window.scrollY;
    let header = document.querySelector('#header');
    let button = document.querySelector('#changeGreen');


    if (top >= 400) {
        header.classList.add('white');
        button.classList.add('green');
    } else {
        header.classList.remove('white');
        button.classList.remove('green');
    }
})


let autori = document.getElementsByClassName("author");
let windowContainers = document.getElementsByClassName("windowContainer");


function rimuoviClasseNone() {
    for (let i = 0; i < windowContainers.length; i++) {
    windowContainers[i].classList.remove("none");
    }
}

function ripristinaClasseNone() {
    for (let i = 0; i < windowContainers.length; i++) {
    windowContainers[i].classList.add("none");
    }
}

for (let i = 0; i < autori.length; i++) {
    autori[i].addEventListener("mouseenter", rimuoviClasseNone);
    autori[i].addEventListener("mouseleave", ripristinaClasseNone);
}

for (let i = 0; i < windowContainers.length; i++) {
    windowContainers[i].addEventListener("mouseenter", rimuoviClasseNone);
    windowContainers[i].addEventListener("mouseleave", ripristinaClasseNone);
}
