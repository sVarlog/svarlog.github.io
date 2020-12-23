import modals from './modules/modal.js';

const stepsInit = () => {
    let wrapp = document.querySelector('.notificationModal'),
        step1 = wrapp.querySelector('.firstStep'),
        step2 = wrapp.querySelector('.secondStep'),
        step3 = wrapp.querySelector('.lastStep'),
        changeBtns = wrapp.querySelectorAll('.changeStep'),
        input1 = step2.querySelector('input'),
        input2 = step3.querySelector('input'),
        btn1 = step2.querySelector('.nextStep'),
        btn2 = step3.querySelector('.sendBtn');
    
    let steps = [step1, step2, step3];

    btn1.setAttribute('disabled', true);
    btn2.setAttribute('disabled', true);
    
    const validateEmail = (val) => {
        let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return reg.test(val);
    };
    
    const check = () => {
        if (validateEmail(input1.value)) {
            btn1.removeAttribute('disabled');
        } else {
            btn1.setAttribute('disabled', true);
        }
        if (input2.value.length >= 5) {
            btn2.removeAttribute('disabled');
        } else {
            btn2.setAttribute('disabled', true);
        }
    };
    check();

    const changeStep = (n = 0) => {
        steps.forEach((el, i) => {
            el.classList.remove('active');
            if (i === n) {
                el.classList.add('active');
            }
        });
    };
    changeStep();

    changeBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            changeStep(+el.dataset.step - 1);
        });
    });

    input1.addEventListener('input', () => {
        check();
    });
    input2.addEventListener('input', () => {
        check();
    });
};

window.addEventListener('DOMContentLoaded', () => {
    modals('.showNotification', '.notificationModal');
    stepsInit();
});