var password;
function getPassword() {
    var chars = '0123456789qweuasdfg!@#hjklrtyzx%^&*()cvbnm<>?iop$_+={}[]:';
    var passwordLength = 16;
    password = '';
    for(var i=0; i< passwordLength ; i++){
        var random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random , random+1) ;
    }
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    getPassword();
    document.querySelector('#Password').value = password;
    document.querySelector('p').innerText = password;
})

const copy = document.querySelector('.copy');
function copyPassword() {
    var copyText = document.querySelector('#Password');
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand('copy');
    document.querySelector('.alertBox').classList.add('display');
}
copy.addEventListener('click' , ()=>{
    copyPassword();
})