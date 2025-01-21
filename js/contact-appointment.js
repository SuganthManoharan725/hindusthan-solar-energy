document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject= document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Prepare the email content
    const emailContent = `
        <h2>New Conatct Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Send quote request using Sendinblue API
    axios.post('https://api.sendinblue.com/v3/smtp/email', {
        sender: { email: 'romansuganth1762001@gmail.com' }, // Replace with your sender email
        to: [{ email: 'romansuganth1762001@gmail.com', name: 'Suganth M' }], // Replace with the recipient email
        subject: 'New contact Request',
        htmlContent: emailContent
    }, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': '' // Replace with your Sendinblue API key
        }
    })
    .then(response => {
        document.getElementById('contactSuccessMessage').style.display = 'block';
        document.getElementById('contactErrorMessage').style.display = 'none';
        document.getElementById('contact-form').reset(); // Clear the form
    })
    .catch(error => {
        document.getElementById('contactErrorMessage').style.display = 'block';
        document.getElementById('contactSuccessMessage').style.display = 'none';
        console.error('Error:', error);
    });
});
