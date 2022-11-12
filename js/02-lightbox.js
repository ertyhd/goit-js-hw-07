import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galereyList: document.querySelector('.gallery'),
};

refs.galereyList.insertAdjacentHTML("beforeend", createImageCards(galleryItems));
refs.galereyList.addEventListener('click', onGaleryListClick);

function createImageCards(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
    return `<li><a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" 
                alt="${description}" />
            </a></li>`
    }).join('');
};
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
});
function onGaleryListClick(event) {
    event.preventDefault();
    if(!event.target.classList.contains('gallery__image')) {
        return;
    };
};
console.log(refs.galereyList)