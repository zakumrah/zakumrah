const OWNER_PHONE_NO = '8431422844';
document.getElementById('sub-btn').addEventListener('click', function(){
    let message = "Hi, I would like to subscribe to your updates.Please add me to your list";
    let phoneNumber = "+91${}";
   /* let url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);*/
      window.open(`http://wa.me/+91${OWNER_PHONE_NO}?text=${message}`,'_blank');
});