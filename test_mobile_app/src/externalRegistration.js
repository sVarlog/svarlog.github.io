import {checkBtn, validation} from './modules/authorizationValidation.js';

let formWrapp = document.querySelector('.registration'),
    validationInput = formWrapp.querySelector('.inputPhone'),
    regBtn = formWrapp.querySelector('button.regBtn'),
    inpOne = formWrapp.querySelector('.passWrapp .passFirst'),
    inpSec = formWrapp.querySelector('.passWrapp .passRepeat');

    regBtn.setAttribute('disabled', true);

const showLang = (btn, element) => {
    let button = document.querySelector(btn),
        dropdown = document.querySelector(element);

    button.addEventListener('click', (e) => {
        dropdown.classList.toggle('active');
    });
};

window.addEventListener('DOMContentLoaded', () => {
    validationInput.addEventListener('input', () => {
        const fnNum = () => {
            checkBtn('phone', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.regBtn');
        };

        const fnEmail = () => {
            checkBtn('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.regBtn');
        };

        validation(formWrapp, validationInput, 'label span', '.passWrapp', 'Телефон', 'Email', 'Телефон или Email', fnNum, fnEmail);
    });
    inpOne.addEventListener('input', () => {
        checkBtn('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.regBtn');
    });
    inpSec.addEventListener('input', () => {
        checkBtn('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.regBtn');
    });
    showLang('.lang', '.lang');
});