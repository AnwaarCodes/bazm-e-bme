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
    const stats = document.querySelectorAll('.mission-stat h2');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        animateCountUp(stat, target, 2000); // Animate over 2 seconds
    });
});



const elementsToAnimate = document.querySelectorAll('.value-container');

// Function to animate a single element
function animateElement(element) {
  element.style.opacity = 0; 
  setTimeout(() => {
    element.style.transition = "opacity 1s ease-in-out";
    element.style.opacity = 1; 
  }, 500); 
}

// Animate all selected elements with a staggered delay
elementsToAnimate.forEach((element, index) => {
  setTimeout(() => {
    animateElement(element);
  }, index * 500); //Stagger the animations by 500ms each
});







// Get the section element
const section = document.getElementById('section');

// Get the top section and team section elements
const topSection = section.querySelector('.top-section');
const teamSection = section.querySelector('.team-section');
const teamMembers = section.querySelector('.team-members');

// Add event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the section's top and bottom positions
  const sectionTop = section.offsetTop;
  const sectionBottom = sectionTop + section.offsetHeight;

  // Check if the section is in view
  if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
    // Animate the top section in from the top
    topSection.style.opacity = '1';
    topSection.style.transform = 'translateY(0)';

    // Animate the team section in from the bottom
    teamSection.style.opacity = '1';
    teamSection.style.transform = 'translateY(0)';

    // Animate the team members in from the center
    teamMembers.style.opacity = '1';
    teamMembers.style.transform = 'scale(1)';

    // Animate each team member in from the center
    const teamMemberElements = teamMembers.children;
    for (let i = 0; i < teamMemberElements.length; i++) {
      teamMemberElements[i].style.opacity = '1';
      teamMemberElements[i].style.transform = 'scale(1)';
    }
  }
});