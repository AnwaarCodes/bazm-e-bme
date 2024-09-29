const studentButton = document.querySelector('.membership-student');
const professionalButton = document.querySelector('.membership-professional');


function toggleColors() {
  studentButton.classList.toggle('membership-professional');
  studentButton.classList.toggle('membership-student');
  professionalButton.classList.toggle('membership-student');
  professionalButton.classList.toggle('membership-professional');
}


studentButton.addEventListener('click', toggleColors);
professionalButton.addEventListener('click', toggleColors);



// gsap.fromTo(".arrow", 
//   { x: 0, y: 0, opacity: 0 }, 
//   { x: (i, target) => target.offsetLeft - document.querySelector(".circle").offsetLeft, 
//     y: (i, target) => target.offsetTop - document.querySelector(".circle").offsetTop, 
//     opacity: 1, 
//     duration: 1, 
//     stagger: 0.1 
//   }
// );

// // Animate circles from the center circle after 1 second
// gsap.fromTo(".circle-1, .circle-2, .circle-3, .circle-4, .circle-5, .circle-6, .circle-7, .circle-8", 
//   { x: 0, y: 0, opacity: 0 }, 
//   { x: (i, target) => target.offsetLeft - document.querySelector(".circle").offsetLeft, 
//     y: (i, target) => target.offsetTop - document.querySelector(".circle").offsetTop, 
//     opacity: 1, 
//     duration: 1, 
//     delay: 1, 
//     stagger: 0.1 
//   }
// );

// // Infinite rotation around the center circle
// gsap.to(".circle-1, .circle-2, .circle-3, .circle-4, .circle-5, .circle-6, .circle-7, .circle-8, .arrow", 
//   { rotation: 360, transformOrigin: "50% 50%", duration: 10, repeat: -1, ease: "linear" }
// );


gsap.to(".center-circle", {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: "linear"
});

// Infinite rotation of the arrows and end circles
gsap.to(".arrow-box", {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: "linear"
});