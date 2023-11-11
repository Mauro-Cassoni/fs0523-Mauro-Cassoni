const LINK = 'https://striveschool-api.herokuapp.com/api/product/'
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTA0MTI1NGU4ODAwMTgzZjE4NjUiLCJpYXQiOjE2OTk2MDI0OTcsImV4cCI6MTcwMDgxMjA5N30.uhqYWIoMloYMqF8_ehiAfaDV4ulDZ37VcyxV8VQ6Yoo"


fetch(LINK, {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": KEY,
    }
})
    .then(res => res.json())
    .then(phones => {

        phones.forEach((phone, i) => {
            cloneTemplate()
            compilePhone(phone)
        })

    })

function cloneTemplate(nr = `0`) {
    const template = document.getElementsByTagName("template")[`${nr}`].content;
    const clone = template.cloneNode(true);
    const cloneContainer = document.getElementById(`target${nr}`);
    cloneContainer.appendChild(clone);
    return clone;
}


function compilePhone(phone) {
    const clone = document.querySelector('.card:last-of-type');
    const immagine = clone.querySelector('.card-img-top');
    immagine.src = phone.imageUrl;
    const titolo = clone.querySelector('#nameProduct');
    titolo.innerHTML = phone.name;
    const prezzo = clone.querySelector('#priceProduct');
    prezzo.innerHTML = phone.price + '€';
    const description = clone.querySelector('#descriptionProduct');
    description.innerHTML = phone.description;
    const brandProduct = clone.querySelector('#brandProduct');
    brandProduct.innerHTML = phone.brand;
    compileButton(clone,phone)
}

function compileButton(clone,phone) {
    let buttonModifica = clone.querySelector('.buttonModifica');
    buttonModifica.href = 'modificaRealmente.html?id=' + phone._id;

    let buttonElimina = clone.querySelector('.buttonElimina');
    buttonElimina.addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            title: "Sei sicuro di voler eliminare questo prodotto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, elimina!"
        }).then(result => {
            if (result.isConfirmed) {
                deleteProduct(phone._id);
            }
        })
    })
}



function deleteProduct(phone_id) {
    fetch(`${LINK}${phone_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        }
    }).then(res => {
        if (res.status === 200) {

            Swal.fire({
                icon: "success",
                text: `Dati eliminati correttamente!`
            }).then(() => { location.reload() });
        }
    })
}