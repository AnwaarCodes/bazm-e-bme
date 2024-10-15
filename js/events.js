const eventCards = document.querySelectorAll('.event-card');


eventCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const img = card.querySelector('img');
        const eventtext = document.querySelectorAll('.event-title,.event-category,.event-card-part,.event-date');
        img.style.opacity = '1'; 
       eventtext.style.color = '#fff';
    });

    card.addEventListener('mouseout', () => {
        const img = card.querySelector('img');
        img.style.opacity = '0';  
    });
});