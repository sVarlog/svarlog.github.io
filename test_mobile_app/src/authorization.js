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