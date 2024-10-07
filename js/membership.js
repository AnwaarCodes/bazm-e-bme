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



function changeMembershipText(type) {
  const boxTextElements = document.querySelectorAll('.box-text');

  
  const studentText = [
      'Access a wide range of educational materials, including e-books, research papers, and multimedia resources specifically curated for students.',
      'Explore internships, part-time jobs, and student-exclusive work opportunities to help you build your career from the ground up.',
      'Attend workshops, webinars, and educational seminars focused on student development and learning new skills.',
      'Join a vibrant student network where you can collaborate on projects, share ideas, and connect with like-minded peers.'
  ];

  const professionalText = [
      'Unlock advanced research materials, industry reports, and exclusive content designed for professionals looking to stay ahead in their field.',
      'Access career-enhancing opportunities, including full-time positions, leadership roles, and exclusive job listings for professionals.',
      'Attend industry-leading conferences, seminars, and networking events tailored for professionals aiming to deepen their expertise.',
      'Expand your professional network by connecting with industry experts, seasoned professionals, and potential business partners.'
  ];

  const selectedText = (type === 'student') ? studentText : professionalText;

  boxTextElements.forEach((box, index) => {
      box.textContent = selectedText[index % 4]; // Use modulo to repeat the same text for duplicated boxes
  });
}

document.querySelector('.membership-student').addEventListener('click', () => {
  changeMembershipText('student');
});

document.querySelector('.membership-professional').addEventListener('click', () => {
  changeMembershipText('professional');
});

