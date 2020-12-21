import {checkBtn, validation} from './modules/authorizationValidation.js';

const authInit = () => {
    let formWrapp = document.querySelector('.authorization'),
        firstPart = formWrapp.querySelector('.firstPart'),
        secondPart = formWrapp.querySelector('.halfRegistration'),
        loginPart = formWrapp.querySelector('.login'),
        forgotPart = formWrapp.querySelector('.forgot'),
        changeBtns = formWrapp.querySelectorAll('.registerItem'),
        backBtn = formWrapp.querySelector('button.back'),
        toBackItems = formWrapp.querySelectorAll('.toBack'),
        send = formWrapp.querySelector('button.registration'),
        validationInput = formWrapp.querySelector('.inputPhone'),
        inpOne = formWrapp.querySelector('.passWrapp .passFirst'),
        inpSec = formWrapp.querySelector('.passWrapp .passRepeat'),
        enterBtns = formWrapp.querySelectorAll('.enter'),
        forgotPassBtn = formWrapp.querySelector('.forgotPass'),
        toLoginBtn = formWrapp.querySelector('.toLogin');

    send.setAttribute('disabled', true);

    const forgotPassBtnCheck = () => {
        let forgotEnterBtn = formWrapp.querySelector('.forgotEnterBtn'),
            forgotPassInput = formWrapp.querySelector('.forgotPassInput');
        
        forgotEnterBtn.setAttribute('disabled', true);

        const check = () => {
            if (forgotPassInput.value.length >= 5) {
                forgotEnterBtn.removeAttribute('disabled');
            } else {
                forgotEnterBtn.setAttribute('disabled', true);
            }
        };

        forgotPassInput.addEventListener('input', check);
    };
    forgotPassBtnCheck();

    const loginFormCheck = () => {
        let inputMail = formWrapp.querySelector('.login .loginInput'),
            inputPass = formWrapp.querySelector('.login .passInput'),
            loginBtn = formWrapp.querySelector('.login .loginEnter');

        loginBtn.setAttribute('disabled', 'true');

        const validateEmail = (val) => {
            let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            return reg.test(val);
        }

        const check = () => {
            if (validateEmail(inputMail.value) && inputPass.value.length >= 3) {
                loginBtn.removeAttribute('disabled');
            } else {
                loginBtn.setAttribute('disabled', 'true');
            }
        };
        inputMail.addEventListener('input', check);
        inputPass.addEventListener('input', check);
    };
    loginFormCheck();

    const showItem = (n = 0) => {
        let items = [firstPart, secondPart, loginPart, forgotPart];
        items.forEach((el, i) => {
            el.classList.remove('active');
            if (i === n) {
                el.classList.add('active');
            }
        });
    };
    showItem();

    changeBtns.forEach(el => {
        el.addEventListener('click', () => {
            showItem(1);
        });
    });
    backBtn.addEventListener('click', () => {
        showItem(0);
    });
    validationInput.addEventListener('input', () => {
        const fnNum = () => {
            checkBtn('phone', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration')
        };

        const fnEmail = () => {
            checkBtn('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration')
        };

        validation(formWrapp, validationInput, 'label span', '.passWrapp', 'Телефон', 'Email', 'Телефон или Email', fnNum, fnEmail);
    });
    inpOne.addEventListener('input', () => {
        checkBtn('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration');
    });
    inpSec.addEventListener('input', () => {
        checkBtn('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration');
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
    toBackItems.forEach(el => {
        el.addEventListener('click', () => {
            showItem(0);
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    authInit();
});