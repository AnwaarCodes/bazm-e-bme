function toggleGenres() {
    const genreButton = document.querySelector('.expand-btn');
    genreButton.textContent = genreButton.textContent === 'Show more' ? 'Show less' : 'Show more';
}

function toggleContent(button) {
    const expandedContent = button.previousElementSibling;
    const isVisible = expandedContent.style.display === 'block';
    expandedContent.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Read more' : 'Read less';
}



function bookAnimation() {
    const bookItems = document.querySelectorAll('.book-item');

bookItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.book-info').style.opacity = 1;
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.book-info').style.opacity = 0;
    });
});
}
bookAnimation();





const footer = document.querySelector('footer');

gsap.from(footer, {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: 'power2.inOut'
});