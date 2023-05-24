// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);
const galleryImages = galleryItems
  .map(({ preview, original, description }) => {
    const galleryItem = `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li >`;
    return galleryItem;
  })
  .join(``);
gallery.insertAdjacentHTML(`beforeend`, galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
