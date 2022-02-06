import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const wrapper = document.querySelector(".gallery");
const markup = createPicMarkup(galleryItems);

wrapper.insertAdjacentHTML('afterbegin',markup);

function createPicMarkup (images){
    
    return images.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');

}

let lightbox = new SimpleLightbox('.gallery a', { 
    close: true,
    showCounter: true,
    animationSlide: false,
    fadeSpeed: false,
    
    captionsData: "alt",
    captionDelay: 250,
 });
