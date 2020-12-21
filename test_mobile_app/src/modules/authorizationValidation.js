const checkBtn = (type, iSelector, fSelector, sSelector, btnSelector) => {
    let validationInput = document.querySelector(iSelector),
        inpOne = document.querySelector(fSelector),
        inpSec = document.querySelector(sSelector),
        btn = document.querySelector(btnSelector);

    const validateEmail = (val) => {
        let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return reg.test(val);
    }

    if (type === 'phone') {
        if (validationInput.value.length > 10) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', true);
        }
    } else if (type === 'email') {
        if (validateEmail(validationInput.value) && inpOne.value === inpSec.value && inpOne.value != '') {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', true);
        }
    }
};

const validation = (fWrapp, el, lText, pWrap, firstT, secondT, thirdT, funcNumber, funcEmail) => {
    let formWrapp = fWrapp,
        inputVal = el.value,
        labelText = formWrapp.querySelector(lText),
        passWrapp = formWrapp.querySelector(pWrap);

    const number = () => {
        labelText.innerText = firstT;
        labelText.classList.add('active');
        passWrapp.classList.remove('active');
        funcNumber();
    };

    const email = () => {
        labelText.innerText = secondT;
        labelText.classList.add('active');
        passWrapp.classList.add('active');
        funcEmail();
    };

    if (!inputVal.match(/\D/g) && inputVal.length > 0) {
        number();
    } else if (inputVal.match(/(\d|\D)/g) && inputVal.length > 0) {
        email();
    } else if (inputVal.length === 0) {
        labelText.innerText = thirdT;
        labelText.classList.remove('active');
        passWrapp.classList.remove('active');
    }
};

export {checkBtn, validation};