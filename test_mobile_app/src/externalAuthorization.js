let enterBtn = document.querySelector('.enterBtn'),
    mailInput = document.querySelector('input.email'),
    passInput = document.querySelector('input.password');

enterBtn.setAttribute('disabled', true);

const showLang = (btn, element) => {
    let button = document.querySelector(btn),
        dropdown = document.querySelector(element);

    button.addEventListener('click', (e) => {
        dropdown.classList.toggle('active');
    });
};

const check = () => {
    const validateEmail = (val) => {
        let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return reg.test(val);
    }

    if (validateEmail(mailInput.value) && passInput.value.length >= 5) {
        enterBtn.removeAttribute('disabled');
    } else {
        enterBtn.setAttribute('disabled', true);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    showLang('.lang', '.lang');

    mailInput.addEventListener('input', () => {
        console.log('dsda');
        check();
    });
    passInput.addEventListener('input', () => {
        check();
    });
});