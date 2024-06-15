export function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <h2>Participant ${count}</h2>
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}">
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}">
        </section>
    `;
}

export function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
}
