import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const wrapper = document.querySelector(".gallery");
const markup = createPicMarkup(galleryItems);

wrapper.insertAdjacentHTML('afterbegin',markup);

function createPicMarkup (images){
    
    return images.map(({preview, original, description}) => {
        return `
        <li class="gallyry__list">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`;
    }).join('');

}

let lightbox = new SimpleLightbox('.gallery a', { 
    
    
    captionsData: 'alt',
    captionDelay: 250,
 });
