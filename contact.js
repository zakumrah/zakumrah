const OWNER_PHONE_NO = '8431422844';
var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    console.log(email);
    var message = document.getElementById('message').value;
    let Textmessage = `
    Name : ${username}\n
    email: ${email}\n
    Message :${message}
    `
    window.open(`http://wa.me/+91${OWNER_PHONE_NO}?text=${Textmessage}`,'_blank')
})





