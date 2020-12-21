let input = document.querySelector('.forgotPass .forgot'),
    button = document.querySelector('.forgotPassBtn');

button.setAttribute('disabled', true);
console.log(input, button);

const check = () => {
    if (input.value.length >= 5) {
        console.log('test');
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
};

const showLang = (btn, element) => {
    let button = document.querySelector(btn),
        dropdown = document.querySelector(element);

    button.addEventListener('click', (e) => {
        dropdown.classList.toggle('active');
    });
};

window.addEventListener('DOMContentLoaded', () => {
    input.addEventListener('input', () => {
        check();
    });
    showLang('.lang', '.lang');
});