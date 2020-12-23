import modals from './modules/modal.js';

const check = () => {
    let wrapp = document.querySelector('.invoiceModal .input'),
        input = document.querySelector('.invoiceModal .input input'),
        text = document.querySelector('.invoiceModal .input .text');

    const change = () => {
        if (input.value > 0) {
            text.innerText = `${input.value}₽`;
            wrapp.classList.add('active');
        } else {
            wrapp.classList.remove('active');
        }
    };

    input.addEventListener('input', () => {
        change();
    });
};

window.addEventListener('DOMContentLoaded', () => {
    modals('.invoiceBtn', '.invoiceModal');
    check();
});