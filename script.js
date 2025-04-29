document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    const modal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close');
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = form.querySelector('input[type="text"]').value;
        const emailInput = form.querySelector('input[type="email"]').value;

        displayName.textContent = nameInput;
        displayEmail.textContent = emailInput;

        modal.style.display = 'block';

        form.reset(); // Optional: clear the form
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
