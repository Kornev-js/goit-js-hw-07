import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const wrapper = document.querySelector(".gallery");
const markup = createPicMarkup(galleryItems);

wrapper.insertAdjacentHTML('afterbegin',markup);
wrapper.addEventListener("click", onClick);

function createPicMarkup (images){
    
    return images.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        
      </div>`;
    }).join('');

}

function onClick(e){
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
	basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`).show()
}