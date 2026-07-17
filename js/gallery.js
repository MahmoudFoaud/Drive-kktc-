// Drive KKTC — Interactive Lightbox and Gallery Engine

let currentImages = [];
let currentIndex = 0;

function initLightbox() {
  // Create Lightbox DOM elements if they don't exist
  if (document.getElementById('lightbox')) return;

  const lightboxHTML = `
    <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog" aria-label="Image gallery">
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <button class="lightbox-prev" aria-label="Previous image">&#10094;</button>
      <button class="lightbox-next" aria-label="Next image">&#10095;</button>
      <div class="lightbox-content">
        <img id="lightbox-img" src="" alt="">
      </div>
      <div id="lightbox-caption" style="color: white; margin-top: 1rem; font-weight: 500;"></div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);

  const lightbox = document.getElementById('lightbox');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  // Close Event
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Prev / Next Events
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });

  // Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      showNextImage(); // Swiped left
    }
    if (touchEndX > touchStartX + 50) {
      showPrevImage(); // Swiped right
    }
  }
}

function openLightbox(imagesList, index = 0) {
  currentImages = imagesList;
  currentIndex = index;
  
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Disable page scrolling
  
  updateLightboxImage();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Re-enable page scrolling
}

function updateLightboxImage() {
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  if (!imgEl || currentImages.length === 0) return;

  const currentItem = currentImages[currentIndex];
  const src = typeof currentItem === 'string' ? currentItem : currentItem.src;
  const alt = typeof currentItem === 'string' ? 'Gallery Image' : currentItem.alt || 'Gallery Image';

  imgEl.style.opacity = '0';
  setTimeout(() => {
    imgEl.src = src;
    imgEl.alt = alt;
    captionEl.textContent = alt;
    imgEl.style.opacity = '1';
  }, 150);
}

function showNextImage(e) {
  if (e) e.stopPropagation();
  if (currentImages.length <= 1) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightboxImage();
}

function showPrevImage(e) {
  if (e) e.stopPropagation();
  if (currentImages.length <= 1) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxImage();
}

// Setup click triggers on a collection of elements
function bindGalleryTriggers(selectorOrElements) {
  const elements = typeof selectorOrElements === 'string' 
    ? document.querySelectorAll(selectorOrElements) 
    : selectorOrElements;

  const imagesList = Array.from(elements).map(el => ({
    src: el.src || el.getAttribute('data-src'),
    alt: el.alt || el.getAttribute('data-alt') || 'Scenic Spot'
  }));

  elements.forEach((el, index) => {
    el.addEventListener('click', () => {
      openLightbox(imagesList, index);
    });
  });
}

window.initLightbox = initLightbox;
window.openLightbox = openLightbox;
window.bindGalleryTriggers = bindGalleryTriggers;
