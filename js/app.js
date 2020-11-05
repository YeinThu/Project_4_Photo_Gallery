baguetteBox.run('.gallery');

// Commented Out To Use Own Search Filter
// const search = new Filter('search', 'data-caption');

// DOM Variables
const galleryImages = document.querySelectorAll('.grid a');
const searchInput = document.querySelector('#search');

// Search Filter
searchInput.addEventListener('keyup', function(e) {
  e.preventDefault();

  const images = Array.from(galleryImages);
  const userValue = searchInput.value;
  const value = userValue.toLowerCase();

  images.forEach(image => {
    if (image.getAttribute('data-caption').indexOf(value) !== -1) {
      image.style.display = 'inline-block';
    }
    else {
      image.style.display = 'none';
    }
  })
});

