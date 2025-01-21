document.getElementById('subscribeBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get email address
    const email = document.getElementById('subscribeEmail').value.trim();

    // Prepare the email content
    const emailContent = `
        <h2>New Subscription Request</h2>
        <p><strong>Email:</strong> ${email}</p>
    `;

    // Send subscription email using Sendinblue API
    axios.post('https://api.sendinblue.com/v3/smtp/email', {
        sender: { email: 'romansuganth1762001@gmail.com' }, // Replace with your sender email
        to: [{ email: 'romansuganth1762001@gmail.com', name: 'Suganth M' }], // Replace with the recipient email
        subject: 'New Subscription Request',
        htmlContent: emailContent
    }, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': '' // Replace with your Sendinblue API key
        }
    })
    .then(response => {
        document.getElementById('subscribeSuccessMessage').style.display = 'block';
        document.getElementById('subscribeErrorMessage').style.display = 'none';
    })
    .catch(error => {
        document.getElementById('subscribeErrorMessage').style.display = 'block';
        document.getElementById('subscribeSuccessMessage').style.display = 'none';
        console.error('Error:', error);
    });
});
