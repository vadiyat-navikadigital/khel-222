// popup code

// Get the sign in link
const signInLink = document.querySelector('#request-otp');

// Add an event listener to the sign in link
signInLink.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Show the popup box
    const signInModal = new bootstrap.Modal(document.getElementById('signInModal'));
    signInModal.show();
});