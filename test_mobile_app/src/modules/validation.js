const validation = (formSelector, inpSelector, iSelector, inputWrapp, nextBtn, submitBtn) => {
    let input = document.querySelectorAll(inpSelector),
        formItem = document.querySelector(formSelector),
        img = document.querySelector(iSelector),
        inpWrapp = document.querySelector(inputWrapp),
        btn = document.querySelector(nextBtn),
        sBtn = document.querySelector(submitBtn),
        imgSrc = img.src,
        cardNumber = '';

    const showNextBtn = (bool = true) => {
        if (bool) {
            inpWrapp.classList.add('active');
        } else {
            inpWrapp.classList.remove('active');
        }
    };

    const showNum = () => {
        if (cardNumber) {
            input[0].value = cardNumber;
        }
        input[1].value = '';
        input[2].value = '';
    };

    const hideNum = () => {
        if (cardNumber) {
            let newStr = cardNumber.substring(cardNumber.length - 4, cardNumber.length);
            input[0].value = `***${newStr}`;
            console.log(newStr);
        }
    };

    const showInputs = () => {
        console.log(cardNumber.length);
        if (cardNumber.length > 13) {
            input.forEach((el, i) => {
                if (i > 0) {
                    el.classList.add('active');
                }
            });
            showNextBtn(false);
        }
    };

    const hideInputs = () => {
        input.forEach((el, i) => {
            if (i > 0) {
                el.classList.remove('active');
            }
        });
    };

    const activateBtn = (bool = true) => {
        if (cardNumber.length > 13 && input[1].value.length === 5 && input[2].value.length === 3) {
            sBtn.removeAttribute('disabled');
        } else if (!bool) {
            sBtn.removeAttribute('disabled');
            console.log('test');
        } else {
            sBtn.setAttribute('disabled', true);
        }
    };

    const nextStep = () => {
        showInputs();
        hideNum();
        changeFocus(1);
    };

    const changeImage = (n) => {
        let filename = imgSrc.split("/").pop();
        if (n === 4) {
            img.src = imgSrc.replace(filename, '') + 'visa.png';
        } else if (n === 2) {
            img.src = imgSrc.replace(filename, '') + 'Mir.png';
        } else if (n === 5) {
            img.src = imgSrc.replace(filename, '') + 'MasterCard.png';
        } else {
            img.src = imgSrc;
        }
    };

    const checkCvv = (inp) => {
        let cardCode = inp.value.replace(/\D/g, '').substring(0, 3);
        inp.value = cardCode;
        activateBtn();
    };

    const checkYear = (inp, n) => {
        let cardCode = inp.value.replace(/\D/g, '').substring(0, 5);
        cardCode = cardCode != '' ? cardCode.match(/.{1,2}/g).join('/') : '';
        inp.value = cardCode;
        if (n === 5) {
            changeFocus(2);
        }
    };

    const checkNumbers = (inp, n) => {
        let cardCode = inp.value.replace(/\D/g, '').substring(0, 16);
        cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        inp.value = cardCode;
        if (n >= 19) {
            cardNumber = input[0].value;
            nextStep();
            showNextBtn(false);
        } else if (n > 13) {
            cardNumber = input[0].value;
            showNextBtn(true);
        } else {
            showNextBtn(false);
        }
    };

    const changeFocus = (n) => {
        input[n].focus();
    };

    input[0].addEventListener('input', () => {
        changeImage(+input[0].value[0]);
        checkNumbers(input[0], input[0].value.length);
        activateBtn();
    });

    input[1].addEventListener('input', () => {
        checkYear(input[1], input[1].value.length);
        activateBtn();
    });
    
    input[2].addEventListener('input', () => {
        checkCvv(input[2], input[2].value.length);
        activateBtn();
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        activateBtn();
        nextStep();
    });

    input[0].addEventListener('focus', () => {
        showNum();
        showNextBtn(false);
        activateBtn();
        hideInputs();
    });

    input[0].addEventListener('blur', () => {
        hideNum();
        showInputs();
    });

    formItem.addEventListener('reset', () => {
        cardNumber = '';
        changeImage();
        hideInputs();
    });
};

export default validation;