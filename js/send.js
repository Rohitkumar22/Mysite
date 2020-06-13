function send()
{
    const name =document.querySelector('#name').value;
    const email =document.querySelector('#email').value;
    const phone =document.querySelector('#phone').value;
    const msg =document.querySelector('#msg').value;

    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'rohitguleria223@gmail.com',
        From : email,
        Subject : 'Mail from Portfolio '+name+' '+phone,
        Body : msg
    }).then(
      message => alert('Message Sent')
    );


} 




