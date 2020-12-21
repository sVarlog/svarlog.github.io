/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/externalForgotPass.js ***!
  \***********************************/
let input = document.querySelector('.forgotPass .forgot'),
    button = document.querySelector('.forgotPassBtn');

button.setAttribute('disabled', true);
console.log(input, button);

const check = () => {
    if (input.value.length > 7) {
        console.log('test');
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    input.addEventListener('input', () => {
        check();
    });
});
/******/ })()
;
//# sourceMappingURL=externalForgotPass.js.map