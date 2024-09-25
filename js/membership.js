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
