import { successTemplate, participantTemplate } from './Templates.js';

let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-participant-btn');
    const form = document.getElementById('registration-form');

    addButton.addEventListener('click', () => {
        participantCount++;
        addParticipant(participantCount);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const total = totalFees();
        const adultName = document.getElementById('adult_name').value;
        const summary = successTemplate({
            name: adultName,
            participants: participantCount,
            fees: total
        });
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('summary-section').innerHTML = summary;
        document.getElementById('summary-section').classList.remove('hide');
    });
});

function addParticipant(count) {
    const participantTemplateHTML = participantTemplate(count);
    const addButton = document.getElementById('add-participant-btn');
    addButton.insertAdjacentHTML('beforebegin', participantTemplateHTML);

}
