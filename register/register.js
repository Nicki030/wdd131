import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    document.getElementById('addParticipant').addEventListener('click', () => {
        participantCount++;
        addParticipant(participantCount);
    });

    function addParticipant(count) {
        const template = participantTemplate(count);
        document.getElementById('addParticipant').insertAdjacentHTML('beforebegin', template);
    }

    document.getElementById('registrationForm').addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();
        
        const totalFees = calculateTotalFees();
        const adultName = document.querySelector('input[name="name1"]').value;
        const summary = successTemplate({
            name: adultName,
            participants: participantCount,
            fees: totalFees
        });
        
        document.getElementById('registrationForm').classList.add('hide');
        const summaryElement = document.getElementById('summary');
        summaryElement.innerHTML = summary;
        summaryElement.classList.remove('hide');
    }

    function calculateTotalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        const total = feeElements.reduce((sum, fee) => sum + parseFloat(fee.value || 0), 0);
        return total;
    }
});
