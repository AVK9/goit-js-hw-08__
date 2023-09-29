import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const addStileScc = `<link href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css" rel="stylesheet">`;
document.head.insertAdjacentHTML('beforeend', addStileScc);

// const addScriptMod = `<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>`;
// document.body.insertAdjacentHTML('beforeend', addScriptMod);

//   const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
// document.body.appendChild(script);



const galleryImage = document.querySelector('.gallery');
const imageMarkup = createImageCardsMarkup(galleryItems);


galleryImage.insertAdjacentHTML('beforeend', imageMarkup);

galleryImage.addEventListener('click', onGalleryImageClick);

function createImageCardsMarkup(galleryItems) {
return galleryItems
.map(({ preview, original, description }) =>
`
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      loading="lazy"
    />
  </a>
</li>
`
).join('');
 }

function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.carrentTarget) {
        return;
    }
    const carrentImage = evt.target.closest('.gallery__image');
    console.log(carrentImage.dataset.source); 

  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${carrentImage.dataset.source}" width="800" height="600">

  </div>
`);

  instance.show();
const imageOpen = document.querySelector('.basicLightbox__placeholder');
imageOpen.addEventListener('click', onImageClickClose);

function onImageClickClose (e) { 
     if (e.target === e.carrentTarget) {
        return;
    }
   instance.close()
}


 document.addEventListener('keydown', onEscKeyPress);
function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onEscKeyPress);
  }
}
}
