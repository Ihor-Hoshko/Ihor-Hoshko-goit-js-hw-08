// Add imports above this line

import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryAll = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      
      alt="${description}"
    />
  </a>
</li>`,
  )
  .join('');
galleryAll.insertAdjacentHTML('afterbegin', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
