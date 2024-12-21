document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    // Prepare the email content
    const emailContent = `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Send quote request using Sendinblue API
    axios.post('https://api.sendinblue.com/v3/smtp/email', {
        sender: { email: 'romansuganth1762001@gmail.com' }, // Replace with your sender email
        to: [{ email: 'romansuganth1762001@gmail.com', name: 'Suganth M' }], // Replace with the recipient email
        subject: 'New Quote Request',
        htmlContent: emailContent
    }, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': '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' // Replace with your Sendinblue API key
        }
    })
    .then(response => {
        document.getElementById('quoteSuccessMessage').style.display = 'block';
        document.getElementById('quoteErrorMessage').style.display = 'none';
        document.getElementById('quote-form').reset(); // Clear the form
    })
    .catch(error => {
        document.getElementById('quoteErrorMessage').style.display = 'block';
        document.getElementById('quoteSuccessMessage').style.display = 'none';
        console.error('Error:', error);
    });
});
