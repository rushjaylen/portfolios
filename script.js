// Simple form submission handler
// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    // Send the email using EmailJS
    emailjs.send('service_21neazs', 'Jaylen', emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for contacting me! I will get back to you soon.');
        }, function(error) {
            console.log('FAILED...', error);
            alert('An error occurred while sending your message. Please try again later.');
        });

    // Reset the form
    this.reset();
});
