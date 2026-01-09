console.log('JavaScript file is connected!');
console.log('JavaScript loaded');

const image = document.querySelector('.header-main-pic');
const section2 = document.querySelector('.section2-img');

console.log('Image:', image);
console.log('Section2:', section2);

// Scroll event listener
window.addEventListener('scroll', () => {
    const section2Rect = section2.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    
    console.log('Section2 top:', section2Rect.top, 'bottom:', section2Rect.bottom);
    console.log('Image top:', imageRect.top);
    
    // Check if the fixed image position overlaps with section2
    if (imageRect.top >= section2Rect.top && imageRect.top <= section2Rect.bottom) {
        console.log('✓ Image is over section2 - INVERTING');
        image.style.filter = 'invert(1)';
    } else {
        console.log('✗ Image is NOT over section2 - NORMAL');
        image.style.filter = 'invert(0)';
    }
});