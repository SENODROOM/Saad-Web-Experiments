// Get elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Function to open lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Replace '-thumbnail' in src to get full-size image
        const fullSrc = item.src.replace('-thumbnail', '');
        lightboxImage.src = fullSrc;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox when clicking close button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
