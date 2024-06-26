import { successTemplate, participantTemplate } from './Templates.js';

let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-participant-btn');

    addButton.addEventListener('click', () => {
        participantCount++;
        addParticipant(participantCount);
    });

    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const total = totalFees();
        const adultName = document.getElementById('adult-name').value;
        const summary = successTemplate({
            name: adultName,
            participants: participantCount,
            fees: total
        });
        document.getElementById('form-section').style.display = 'none';
        document.getElementById('summary-section').innerHTML = summary;
        document.getElementById('summary-section').style.display = 'block';
    });
});

function addParticipant(count) {
    const participantTemplateHTML = participantTemplate(count);
    const addButton = document.getElementById('add-participant-btn');
    addButton.insertAdjacentHTML('beforebegin', participantTemplateHTML);
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, fee) => sum + Number(fee.value), 0);
    return total;
}
