/*
    This script will provide extra input validation
*/

listenForPWconfirm();

//Add event listener:
function listenForPWconfirm() {
    const confirmPW = document.getElementById('passwordconfirm');
    confirmPW.addEventListener('input', checkIfMatch);

    const password = document.getElementById('password');
    password.addEventListener('input', checkIfMatch);

    const phoneNum = document.getElementById("phone");
    phoneNum.addEventListener('keyup', (e) => {
        if (e.key == 'Delete' || e.key == 'Backspace') return;
        else phoneHyphen();
    });
}

//Checks to see if passwords match
function checkIfMatch() {
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('passwordconfirm');

    (pass1.value === pass2.value) ? 
        passMatch(pass1, pass2) : 
        passFail(pass1, pass2);
}

//Style based on passwords matching
function passMatch(pass1, pass2) {
    console.log('pass');
    pass1.classList.remove('invalid');
    pass1.classList.add('valid');
    pass2.classList.remove('invalid');
    pass2.classList.add('valid');

    //Removes invalid message
    const validMsg = '';
    const match = document.getElementById('mismatchMsg');
    match.textContent = validMsg;
}

//Style based on password NOT matching
function passFail(pass1, pass2) {
    console.log('fail');
    pass1.classList.remove('valid');
    pass1.classList.add('invalid');
    pass2.classList.remove('valid');
    pass2.classList.add('invalid');

    //Adds message when passwords do not match
    const invalidMsg = 'Passwords do not match';
    const mismatch = document.getElementById('mismatchMsg');
    mismatch.textContent = invalidMsg;
}

//Automatically add hyphen to phone number
function phoneHyphen() {
    const phoneNum = document.getElementById("phone");

    //Split phone number into array
    let phoneArray = phoneNum.value.split('');
    let phoneLn = phoneNum.value.length;

    //If 3 digits have been entered or if 6 digits plus a hyphen
    //have been entered, add a hyphen to the end of the array
    if (phoneLn === 3 || phoneLn === 7) phoneArray.push('-');

    //Get rid of the commas and change the input value
    let newPhone = phoneArray.join().replaceAll(',','');
    phoneNum.value = newPhone;
}