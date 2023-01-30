import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const galleryMarktUp = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarktUp);
galleryContainer.addEventListener(`mousdown`, onImgClick);


function createGalleryCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"   src="${preview}"  alt="${description}" />
</a>`;
  }).join(``);
}

 function onImgClick(event) {
//      if (event.target.nodeName !== `IMG`) {
//         return;
//     }
    
    //cancels img download
    event.preventDefault();    
 }
 const simpleLightbox= new SimpleLightbox('.gallery a', {    
        captionsData: `alt`,
        captionDelay: 250,   
    });


