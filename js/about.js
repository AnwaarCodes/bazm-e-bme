// Function to create a counting animation for stats
function animateCountUp(el, target, duration) {
    let start = 0;
    const increment = Math.ceil(target / (duration / 20)); // Calculate step increment
    const countUp = () => {
        start += increment;
        if (start > target) start = target; // Ensure it doesn't overshoot
        el.innerText = start.toLocaleString(); // Format with commas
        if (start < target) {
            setTimeout(countUp, 20); // Repeat every 20ms
        }
    };
    countUp();
}

// Trigger the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat h2');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        animateCountUp(stat, target, 2000); // Animate over 2 seconds
    });
});