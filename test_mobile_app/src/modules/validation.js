const validation = (inpSelector, iSelector, inputWrapp, nextBtn, submitBtn) => {
    let input = document.querySelectorAll(inpSelector),
        img = document.querySelector(iSelector),
        inpWrapp = document.querySelector(inputWrapp),
        btn = document.querySelector(nextBtn),
        sBtn = document.querySelector(submitBtn),
        imgSrc = img.src,
        cardNumber;

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
            console.log('test');
            input[0].value = `***${newStr}`;
        }
    };

    const changeFocus = (n) => {
        input[n].focus();
    }; 

    const activeBtn = () => {
        sBtn.removeAttribute('disabled');
    };

    const disableBtn = () => {
        sBtn.setAttribute('disabled', true);
    };

    const nextStep = () => {
        inpWrapp.classList.remove('active');
        input.forEach((el, i) => {
            if (i > 0) {
                el.classList.add('active');
            }
        });
        hideNum();
        changeFocus(1);
    };

    const changeImage = (n) => {
        let filename = imgSrc.split("/").pop();
        if (n === 4) {
            img.src = imgSrc.replace(filename, '') + '/visa.png';
        } else if (n === 2) {
            img.src = imgSrc.replace(filename, '') + '/Mir.png';
        } else if (n === 5) {
            img.src = imgSrc.replace(filename, '') + '/MasterCard.png';
        } else {
            img.src = imgSrc;
        }
    };

    const checkCvv = (inp, n) => {
        let cardCode = inp.value.replace(/\D/g, '').substring(0, 3);
        inp.value = cardCode;
        if (n >= 3) {
            activeBtn();
        } else {
            disableBtn();
        }
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
        cardNumber = input[0].value;
        if (n >= 19) {
            cardNumber = input[0].value;
            nextStep();
        } else if (n > 13) {
            inpWrapp.classList.add('active');
        } else {
            inpWrapp.classList.remove('active');
        }
    };

    input[0].addEventListener('input', () => {
        changeImage(+input[0].value[0]);
        checkNumbers(input[0], input[0].value.length);
    });

    input[1].addEventListener('input', () => {
        checkYear(input[1], input[1].value.length);
    });
    
    input[2].addEventListener('input', () => {
        checkCvv(input[2], input[2].value.length);
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        nextStep();
    });

    input[0].addEventListener('focus', () => {
        showNum();
    });

    input[0].addEventListener('blur', () => {
        hideNum();
    });
};

export default validation;