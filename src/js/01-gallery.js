// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryAll = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  )
  .join('');
galleryAll.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryAll.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
