function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",  // Ensure this is the correct host
      Username: "pd37195@gmail.com",  // Your Elastic Email username
      Password: "ACF601D15EFB4B1BC24E7569E9D5ED6F90F5",  // SMTP/API Key, keep it safe
      To: "pd371495@gmail.com",  // Recipient's email
      From: document.querySelector("#email").value,  // Sender's email from input field
      Subject: "Subject",
      Body: "The body of the email",
      Port: 2525,  // Set the port number
      UseDefaultCredentials: false,  // This may need to be adjusted based on your SMTP provider
    }).then(
      (message) => alert(message)  // Alert success message
    ).catch(
      (error) => alert("Failed to send email: " + error)  // Alert failure message
    );
  }
  
  document.getElementById('form').addEventListener("submit", function(e) {
    e.preventDefault();
    sendEmail();
    reset();
    return false;
  });
  