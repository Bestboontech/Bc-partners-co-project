function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name " + userName +
                      "<br/> Phone " + phone +
                      "<br/> Email " + email +
                      "<br/> Message " + message; // added + here to concatenate the Message line

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "okemutiuolatunji@gmail.com",
      Password: "B56C4A5A6A5B739F037B1C354D5313392FD0",
      To: 'coursesassignmentui@gmail.com',
      From: 'okemutiuolatunji@gmail.com',
      Subject: "This is the subject",
      Body: messageBody
    }).then(
      message => {
        if (message == "OK") {
          swal("Successful", "You clicked the button!", "success"); // fixed typo "Secussful" to "Successful"
        } else {
          swal("Error", "You clicked the button!", "error");
        }
      }
    );
}
