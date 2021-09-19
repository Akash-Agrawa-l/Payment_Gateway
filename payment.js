function payment() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: `softtechindustries2@gmail.com`,
        Password: `SOFTTECHIND`,
        To: `${email}`,
        From: "softtechindustries2@gmail.com",
        Subject: `Donation Successful!`,
        Body: `Hi ${name},<br><br>
        Thank you very much for donating an amount of <b>Rs. ${amount}</b> to SoftTech Industries. We truly and sincerely appreciate your support of our mission.<br><br>
        Thanking you. <br><br>
        Yours faithfully,<br>
        Akash Agrawal<br>
        Founder - SoftTech Industries`,
    }).then((message) => alert("Payment successful"));
}
