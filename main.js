const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];


const nomi = [
    'Islanda',
    'Svizzera   ',
    'Londra',
    'Non ne ho proprio idea!',
    'Maldive',
];

const descrizione = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime esunt atque. Voluptatibus illo ipsum voluptatem, vero autem similique earum ad. Sint nisi dicta laboriosam libero eligendi ex!',
    'Proident elit minim vnon ipsum quis adipisicing. Minim velit occaecat qui quis non cillum qui fugiat adipisicing aliquip nostrud aliquip. Deserunt pariatur laborum et est nostrud. Laboris est deserunt excepteur dolor elit elit. Officia excepteur proident qui eiusmod excepteur reprehenderit eu sit commodo enim. Amet ad et officia ad minim.',
    'Laborum cillum incididunt ea nisi occaecat ea. Enim sit veniam nostrud mollit aliquip qui. Commodo anim laboris aliqua sint cupidatat consectetur tempor magna nulla minim quis. Quis commodo et cillum esse tempor fugiat. Anim incididunt magna sit nisi eu id nulla sint nulla do elit consectetur pariatur id. Occaeca incididunt anim eicia aliqua sit ex qui et quis sunt aliquip.',
    'Dolor excepteur non eu aliqua id. Ullamco consectetur dolor laborum ea duis magna duis. Commodo fugiat enim elit esse veniam Lorem laboris magna incididunt non. Id Lorem enim sit reprehenderit. Id ipsum est magna ipsum deserunt minim reprehenderit ex occaecat mollit proident velit.',
    'Proident elit minim . Minim velit occaecat qui quis non cillum qui fugiat adipisicing aliquip nostrud aliquip. Deserunt pariatur laborum et est nostrud. Laboris est deserunt excepteur dolor elit elit. Officia excepteur proident qui eiusmod excepteur reprehenderit eu sit commodo enim. Amet ad et officia ad minim.',
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
                    <div class="info">
                    <h2>${nomi[i]}</h2>
                    <p>${descrizione[i]}</p>
                    </div>
                </div>`;
}


let thumbs = '';

for (let i = 0; i < images.length; i ++){

    thumbs += `<div class="thumb">
                    <img src="${images[i]}">
                </div>`;
}



// Creazione Slide
let itemsContainer = document.querySelector('.container-left');
itemsContainer.innerHTML = slides;

let thumbsContainer = document.querySelector('.container-right');
thumbsContainer.innerHTML = thumbs;



// inizializzo una variabile che mi tenga traccia della slide attiva
let currentSlide = 0;

// recupero tutte le slide, ed al primo aggiungo la classe active
let items = document.getElementsByClassName('item');
items[currentSlide].classList.add('active');

let thumbnails = document.getElementsByClassName('thumb');
thumbnails[currentSlide].classList.add('active');


// Gestisco il click su slide precedente
// per le img
let giu = document.querySelector('.giu')
giu.addEventListener('click',
    function () {
        if (currentSlide < items.length - 1) {

            items[currentSlide].classList.remove('active');
            thumbnails[currentSlide].classList.remove('active');


            currentSlide++; // vado alla slide seguente

            items[currentSlide].classList.add('active');
            thumbnails[currentSlide].classList.add('active');


        } else {
            items[currentSlide].classList.remove('active');
            thumbnails[currentSlide].classList.remove('active');

            currentSlide = 0;

            items[currentSlide].classList.add('active');
            thumbnails[currentSlide].classList.add('active');

        }
    }
);


// gestisco il click su slide seguente 
let su = document.querySelector('.su')
su.addEventListener('click',
function () {
    if (currentSlide > 0) {

        items[currentSlide].classList.remove('active');
        thumbnails[currentSlide].classList.remove('active');


        currentSlide--; 

        items[currentSlide].classList.add('active');
        thumbnails[currentSlide].classList.add('active');

    } else {
        items[currentSlide].classList.remove('active');
        thumbnails[currentSlide].classList.remove('active');

        currentSlide = 4;

        items[currentSlide].classList.add('active');
        thumbnails[currentSlide].classList.add('active');

    }
}
);

