document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Remove old feedback if it exists
        let oldMessage = document.getElementById('formMessage');
        if (oldMessage) {
            oldMessage.remove();
        }

        // Create a feedback message
        const message = document.createElement('p');
        message.id = 'formMessage';
        message.setAttribute('role', 'alert'); // Important for screen readers
        message.textContent = 'Merci ! Votre formulaire a été envoyé.';

        // Insert message after the form
        form.insertAdjacentElement('afterend', message);

        // Move keyboard focus to the message
        message.focus();
    });
});
