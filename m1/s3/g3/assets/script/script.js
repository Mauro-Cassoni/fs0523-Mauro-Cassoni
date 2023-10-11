let button = document.querySelector('#button');

button.addEventListener("click",function(){
    
    let lista = document.querySelector('#lista');
    let ListaOk = document.querySelector('#listaOk');
    let testo = document.querySelector('#testo');

    if(!testo.value) return;

    let li = document.createElement("li");
    let del = document.createElement("span");
    li.classList.add('list-item');
    del.classList.add('del-item');
    li.innerText = testo.value;
    del.innerText = 'Elimina';
    
    li.addEventListener('click',function(){
        li.classList.toggle('ok');
    })

    del.addEventListener('click',function(){
        li.remove()
        del.remove()
    })


    lista.prepend(li, del);
    testo.value = '';
});