// var forward = document.querySelectorAll(".member");
// var value = 0;
// var maxindex = forward.length - 3;

// forward.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// let goforward = () => {
//   if (value < maxindex) {
//     value++;
//     slidingimages();
//   }
// };
// let gobackward = () => {
//   if (value > 0) {
//     value--;
//     slidingimages();
//   }
// };

// var slidingimages = () => {
//   forward.forEach((slide) => {
//     slide.style.transform = `translateX(-${value * 100}%)`;
//   });
// };

document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementsByClassName('navbar-menu-icon');
  var navList = document.getElementsByClassName('nav-list');

  menuIcon.addEventListener('change', function() {
      if (menuIcon.checked) {
          navList.style.display = 'block';
      } else {
          navList.style.display = 'none';
      }
  });
});


function photosanim() {
  var text = document.querySelector(".text-over h2,h1,p")
var image = document.querySelector(".image-overlay-A")

text.addEventListener("mouseover", ()=>{
  image.style.opacity = '1';
  image.style.zIndex = '1';
})

text.addEventListener("mouseout", ()=>{
  image.style.opacity = '0';
  image.style.zIndex = '0';
})
}
photosanim();


function iconanim(){
  var navitems = document.querySelector(".nav-hover-items")
  var itemslist = document.querySelector(".list-item-2")
  var isnavvisible = true;
 
  itemslist.addEventListener("click", ()=>{
    if (isnavvisible) {
      navitems.style.display= "block"
    } else{
      navitems.style.display = "none"
    }
    isnavvisible = !isnavvisible
    gsap.to(".nav-icon-content",{
    duration: 0.4,
    delay: 0.7,
    yoyo:true,
    stagger: {
      amount: 0.3,
      ease: "power2.inOut"
    }
    })
  })
}
iconanim()

function scrollanim(){
  var relem = document.querySelectorAll(".right-elem")

relem.forEach(function(elem){
 elem.addEventListener("mouseenter", function(){
    gsap.to(elem.childNodes[3], {
      opacity:1,
      scale:1
    })
 })
 elem.addEventListener("mouseleave", function(){
    gsap.to(elem.childNodes[3], {
      opacity:0,
      scale:0
    })
 })
 elem.addEventListener("mousemove", function(dets){
    gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x - 90,
      y:dets.y - elem.getBoundingClientRect().y - 210
    })
 })
})
}
scrollanim();

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