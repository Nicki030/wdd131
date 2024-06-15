import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
  const addParticipantButton = document.getElementById('addParticipant');
  addParticipantButton.addEventListener('click', addParticipant);

  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', submitForm);
});

function addParticipant() {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  const addParticipantButton = document.getElementById('addParticipant');
  addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
}

function submitForm(event) {
  event.preventDefault();
  const total = totalFees();
  const adultName = document.getElementById('name1').value;
  const summaryElement = document.getElementById('summary');
  summaryElement.innerHTML = successTemplate({ name: adultName, count: participantCount, total });
  document.getElementById('registrationForm').style.display = 'none';
  summaryElement.classList.remove('hide');
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  const total = feeElements.reduce((sum, feeElement) => sum + parseFloat(feeElement.value), 0);
  return total;
}
