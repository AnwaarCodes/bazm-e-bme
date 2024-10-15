const eventCards = document.querySelectorAll('.event-card');


eventCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const img = card.querySelector('img');
        img.style.opacity = '1'; 
    });

    card.addEventListener('mouseout', () => {
        const img = card.querySelector('img');
        img.style.opacity = '0';  
    });
});
