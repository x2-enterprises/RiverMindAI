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

// --- Placeholder for Email Form Logic ---
document.getElementById('upload-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission for now
    const email = document.getElementById('email')?.value;
    console.log(`Email submitted (placeholder): ${email}`);
    alert('Application Received! Your consciousness is pending review... or maybe it isn\'t. We\'ll see.');
    // In a real scenario, you'd send this email to a backend or email service
    document.getElementById('upload-form').reset(); // Clear the form
}); 