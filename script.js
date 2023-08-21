/*
    This script will provide extra input validation
*/

listenForPWconfirm();

//Add event listener:
function listenForPWconfirm() {
    let confirmPW = document.getElementById('passwordconfirm');
    confirmPW.addEventListener("input", checkIfMatch);
}

//Checks to see if passwords match
function checkIfMatch() {
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('passwordconfirm');

    (pass1.textContent === pass2.textContent) ? passMatch() : passFail();
}

//Style based on passwords matching
function passMatch() {
    alert('Yes');
}

//Style based on password NOT matching
function passFail() {
    alert('No');
}