onload = console.log('Loaded Successfully!');//tests if paged correctly loaded
let btn = document.getElementById('btn');//clear button
let btn2 = document.getElementById('btn2');//submit button
//event to enable submit button
let form = document.getElementById('form');
form.addEventListener('input',function enableButton() {
    if(email.value.length > 0 && phone.value.length === 10) {
     btn2.removeAttribute('disabled');

    }else{
        btn2.setAttribute('disabled','disabled');
    }
})
//event listener for clearing form
btn.addEventListener('click', function clrButton() {
    first.value = '';
    last.value = '';
    email.value = '';
    phone.value = '';
}); 

//event listener for submitting popup

/*let popup = document.getElementById('popup');

btn2.addEventListener('click',function openPopup() {
popup.classList.add("open-Popup");
});
//event for clearing popup
ok.addEventListener("click",function closePopUp() {
    popup.classList.remove('open-Popup');
})*/

btn2.addEventListener('click',function thankyou() {
    window.alert('Thankyou your message was  successfully submitted!');
});



    
