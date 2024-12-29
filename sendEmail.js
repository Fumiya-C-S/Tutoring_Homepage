emailjs.init("OeUaJgkOTHmLREtg9")

document.getElementById('sendEmail').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const senderEmail = document.getElementById("emailInput").value.trim();
    const emailBody = document.getElementById("emailBody").value.trim();
    const subject = "Tutorting Message from " + name;
    const feedback = document.getElementById('feedback');

    if (name && senderEmail && emailBody){

        var templateParams = {
            name: name,
            senderEmail: senderEmail,
            subject: subject,
            emailBody: emailBody,
        }

        emailjs.send("service_6xwh9s9","template_3zgxyem", templateParams, {
    })
    .then(
        function(response){
            console.log("Email Sent!", response.status, response.text);
            feedback.textContent = "The Email Has Been Sent Successfully";
            feedback.style.color = "green";
            feedback.classList.add('visible');
            document.getElementById('sendEmail').reset();
        
        },
        function(error){
            console.error("FAILED to send...", error);
            feedback.textContent = "There was an Error with sending the email, please try again.";
            feedback.style.color = "red";
            feedback.classList.add('visible');
        }
    );
    } else {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
        feedback.classList.add('visible');
    }

});