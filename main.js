const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];


const nomi = [
    'nome città',
    'nome città',
    'nome città',
    'nome città',
    'nome città',
];

const descrizione = [
    'descrizione citta',
    'descrizione citta',
    'descrizione citta',
    'descrizione citta',
    'descrizione citta',
];

// imges[i] = nomi [i] ?

// slides += `<div class="item">
//                 <img src="${images[i]}">
//                 <img src="${nomi[i]}">
//                 <img src="${descrizione[i]}">
//             </div>`;



let slides = '';

for (let i = 0; i < images.length; i ++){

    slides += `<div class="item">
                    <img src="${images[i]}">
                    <h2>${nomi[i]}</h2>
                    <p>${descrizione[i]}</p>
                </div>`;
}


// Creazione Slide
let itemsContainer = document.querySelector('.container-left');
itemsContainer.innerHTML = slides;


// inizializzo una variabile che mi tenga traccia della slide attiva
let currentSlide = 0;

// recupero tutti le slide, ed al primo aggiungo la classe active
let items = document.getElementsByClassName('item');
items[currentSlide].classList.add('active');


// Gestisco il click su slide precedente
let giu = document.querySelector('.giu')
giu.addEventListener('click',
    function () {
        if (currentSlide < items.length - 1) {

            items[currentSlide].classList.remove('active');

            currentSlide++; // vado alla slide seguente

            items[currentSlide].classList.add('active');

        } else {
            items[currentSlide].classList.remove('active');

            currentSlide = 0;

            items[currentSlide].classList.add('active');

        }
    }
);

// gestisco il click su slide seguente 
let su = document.querySelector('.su')
su.addEventListener('click',
function () {
    if (currentSlide > 0) {

        items[currentSlide].classList.remove('active');

        currentSlide--; 

        items[currentSlide].classList.add('active');

    } else {
        items[currentSlide].classList.remove('active');

        currentSlide = 4;

        items[currentSlide].classList.add('active');

    }
}
);

