'use strict';

// Konami Code Sequence
const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];

let konamiIndex = 0;

document.addEventListener('keydown', (event) => {
    const requiredKey = konamiCode[konamiIndex];
    const keyPressed = event.key;

    // console.log(`Pressed: ${keyPressed}, Required: ${requiredKey}, Index: ${konamiIndex}`); // For debugging

    if (keyPressed.toLowerCase() === requiredKey.toLowerCase()) {
        konamiIndex++;

        // If sequence is complete
        if (konamiIndex === konamiCode.length) {
            console.log('Konami Code Activated! Applying Glitch Mode.');
            document.body.classList.toggle('glitch-mode'); // Toggle glitch mode
            konamiIndex = 0; // Reset index
        }
    } else {
        // Reset if wrong key is pressed
        konamiIndex = 0;
    }
});

// --- Placeholder Email Form Logic ---
// TODO: Replace this with actual email submission logic (e.g., fetch call to a backend API or integration with an email service like Mailchimp/Netlify Forms)
document.getElementById('upload-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default HTML form submission
    const emailInput = document.getElementById('email');
    const email = emailInput?.value;

    if (email) {
        console.log(`Email submitted (placeholder): ${email}`);
        // Display a temporary confirmation message
        alert('Application Received! Your consciousness is pending review... or maybe it isn\'t. We\'ll see.');
        // In a real scenario, you would send the 'email' variable to your backend/service here.
        document.getElementById('upload-form').reset(); // Clear the form
    } else {
        // Optional: Add some basic client-side validation feedback
        alert('Please enter a valid email address before submitting.');
    }
}); 