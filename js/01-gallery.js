import { galleryItems } from './gallery-items.js';

// Change code below this line

const instance = basicLightbox.create(`
    <img class="modal-image-original" src=""/>`,
    {
        onShow: instance => {
            refs.galereyList.addEventListener("keydown", modalWindowKeyClose);
        },
        onClose: instance => {
            refs.galereyList.removeEventListener("keydown", modalWindowKeyClose);
        },
    }
);

const refs = {
    galereyList: document.querySelector('.gallery'),
    modalImage: instance.element().querySelector('.modal-image-original'),
};

refs.galereyList.insertAdjacentHTML("beforeend", createImageCards(galleryItems));
refs.galereyList.addEventListener('click', onGaleryListClick);


function createImageCards(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
    }).join('');
};

function onGaleryListClick(event) {
    event.preventDefault();
    if(!event.target.classList.contains('gallery__image')) {
        return;
    };
    refs.modalImage.src = event.target.dataset.source;
    instance.show();
};

function modalWindowKeyClose(event) {
    if(event.code === 'Escape') {
            instance.close();
        }
};

