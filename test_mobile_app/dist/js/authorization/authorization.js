/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/authorization.js ***!
  \******************************/
const authInit = () => {
    let formWrapp = document.querySelector('.authorization'),
        firstPart = formWrapp.querySelector('.firstPart'),
        secondPart = formWrapp.querySelector('.halfRegistration'),
        loginPart = formWrapp.querySelector('.login'),
        forgotPart = formWrapp.querySelector('.forgot'),
        changeBtns = formWrapp.querySelectorAll('.registerItem'),
        backBtn = formWrapp.querySelector('button.back'),
        send = formWrapp.querySelector('button.registration'),
        validationInput = formWrapp.querySelector('.inputPhone'),
        inpOne = formWrapp.querySelector('.passWrapp .passFirst'),
        inpSec = formWrapp.querySelector('.passWrapp .passRepeat'),
        enterBtns = formWrapp.querySelectorAll('.enter'),
        forgotPassBtn = formWrapp.querySelector('.forgotPass'),
        toLoginBtn = formWrapp.querySelector('.toLogin');

    send.setAttribute('disabled', true);

    const showItem = (n = 0) => {
        let items = [firstPart, secondPart, loginPart, forgotPart];
        items.forEach((el, i) => {
            el.classList.remove('active');
            if (i === n) {
                console.log(i, n);
                el.classList.add('active');
            }
        });
    };
    showItem();

    const checkBtn = (type) => {
        const validateEmail = (val) => {
            let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            return reg.test(val);
        }

        if (type === 'phone') {
            if (validationInput.value.length > 10) {
                send.removeAttribute('disabled');
            } else {
                send.setAttribute('disabled', true);
            }
        } else if (type === 'email') {
            if (validateEmail(validationInput.value) && inpOne.value === inpSec.value && inpOne.value != '') {
                send.removeAttribute('disabled');
            } else {
                send.setAttribute('disabled', true);
            }
        }
    };

    const validation = (el) => {
        let inputVal = el.value,
            labelText = formWrapp.querySelector('label span'),
            passWrapp = formWrapp.querySelector('.passWrapp');
        
        const number = () => {
            labelText.innerText = 'Телефон';
            labelText.classList.add('active');
            passWrapp.classList.remove('active');
            checkBtn('phone');
        };
        
        const email = () => {
            labelText.innerText = 'Email';
            labelText.classList.add('active');
            passWrapp.classList.add('active');
            checkBtn('email');
        };

        if (!inputVal.match(/\D/g) && inputVal.length > 0) {
            number();
        } else if (inputVal.match(/(\d|\D)/g) && inputVal.length > 0) {
            email();
        } else if (inputVal.length === 0) {
            labelText.innerText = 'Телефон или Email';
            labelText.classList.remove('active');
            passWrapp.classList.remove('active');
        }
    };

    changeBtns.forEach(el => {
        el.addEventListener('click', () => {
            showItem(1);
        });
    });
    backBtn.addEventListener('click', () => {
        showItem(0);
    });
    validationInput.addEventListener('input', () => {
        validation(validationInput);
    });
    inpOne.addEventListener('input', () => {
        checkBtn('email');
    });
    inpSec.addEventListener('input', () => {
        checkBtn('email');
    });
    enterBtns.forEach(el => {
        el.addEventListener('click', () => {
            showItem(2);
        });
    });
    forgotPassBtn.addEventListener('click', () => {
        showItem(3);
    });
    toLoginBtn.addEventListener('click', () => {
        showItem(2);
    });
};

window.addEventListener('DOMContentLoaded', () => {
    authInit();
});
/******/ })()
;
//# sourceMappingURL=authorization.js.map