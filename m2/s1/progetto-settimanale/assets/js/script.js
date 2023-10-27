window.addEventListener("scroll",function(){
    let top = window.scrollY;
    let header = document.querySelector('#header');
    let button = document.querySelector('#changeGreen');


    if (top >= 400) {
        header.classList.add('white');
        button.classList.add('green');
    } else {
        header.classList.remove('white');
        header.classList.remove('green');
    }

})
