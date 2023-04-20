import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', itemsMarkup);
galleryList.addEventListener('click', onImgClickOpensModal);

function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<div class="gallery_item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  }).join('');
};

function onImgClickOpensModal(event) { 
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') { return; }
  const isItemsImg = event.target.classList.contains("gallery__image");
  if (!isItemsImg) { return; };

  const currentImgUrl = event.target.dataset.source;

const instance = basicLightbox.create(
    `<img src="${currentImgUrl}" width="1280" height="auto"/>`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress)
    },

    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress)
    }
  }
);
instance.show();

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    instance.close();
  }
}
};


console.log(galleryItems);
