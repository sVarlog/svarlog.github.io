import customSlider from './modules/customSlider.js';
import modal from './modules/modal.js';

let windowWidth = document.documentElement.offsetWidth,
    input = document.querySelector('.cardNumberSlider .input input'),
    sumInput = document.querySelector('.sum input'),
    currNumber = 0,
    validationTypes = ['card', 'qiwi', 'webMoney'];

let confirm = {
    cardNumber: false,
    sum: false
};

let sumParams = {
    min: 1000,
    max: 55000000,
    balance: 125233.65
};

const getValidationType = (n = 0) => {
    return validationTypes[n];
};

const confirmValidation = () => {
    let btn = document.querySelector('.sum .send');
    btn.setAttribute('disabled', true);
    if (confirm.cardNumber && confirm.sum) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', true);
    }
};
confirmValidation();

const calculateCommision = () => {
    let commissionBlock = document.querySelector('.sum .commission'),
        commissionNum = document.querySelector('.sum .send .number'),
        textBlock = document.querySelector('.sum .input .num'),
        newStr = sumInput.value = sumInput.value.replace(/\D/g, '').substring(0, 16),
        percent = (+newStr * 0.05).toFixed(0);

    if (sumInput.value.length > 0) {
        sumInput.classList.add('active');
        textBlock.classList.add('active');
    } else {
        sumInput.classList.remove('active');
        textBlock.classList.remove('active');
    }
    
    newStr = newStr.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
    textBlock.innerText = `${newStr} ₽`;
    if (sumInput.value < sumParams.min) {
        commissionBlock.innerText = 'Минимальная сумма для вывода: 1000₽';
        confirm.sum = false;
        commissionNum.innerText = ``;
    } else if (sumInput.value > 55000000) {
        commissionBlock.innerText = 'Максимальная сумма для вывода: 55.000.000₽';
        confirm.sum = false;
        commissionNum.innerText = ``;
    } else if (sumInput.value > sumParams.balance) {
        commissionBlock.innerText = 'Эта сумма больше, чем у вас на балансе🙁';
        confirm.sum = false;
        commissionNum.innerText = ``;
    } else {
        commissionBlock.innerText = `Комиссия ${percent}₽`;
        confirm.sum = true;
        commissionNum.innerText = `  ${(sumInput.value - percent).toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")} ₽`;
    }
};

const validation = (type = false, reset = false) => {
    let element = document.querySelector('.cardNumberSlider .input input');
    element.setAttribute('data-valid', false);
    reset ? element.value = '' : element.value = element.value;
    reset ? confirm.cardNumber = false : '';
    
    if (type === 'card') {
        let newStr = element.value = element.value.replace(/\D/g, '').substring(0, 16);
        newStr = newStr != '' ? newStr.match(/.{1,4}/g).join(' ') : '';
        element.value = newStr;
        if (+element.value.replace(/\D/g, '').length >= 13 && +element.value.replace(/\D/g, '').length <= 16) {
            confirm.cardNumber = true;
        } else {
            confirm.cardNumber = false;
        }
    } else if (type === 'qiwi') {
        let newStr = element.value = element.value.replace(/\D/g, '').substring(0, 11);
        element.value = `+${newStr}`;
        if (+element.value.replace(/\D/g, '').length === 11) {
            confirm.cardNumber = true;
        } else {
            confirm.cardNumber = false;
        }
    } else if (type === 'webMoney') {
        let newStr = element.value = element.value.replace(/\D/g, '').substring(0, 12);
        element.value = `E${newStr}`;
        if (+element.value.replace(/\D/g, '').length === 12) {
            confirm.cardNumber = true;
        } else {
            confirm.cardNumber = false;
        }
    };
};

const observeItems = ({ firstSelector, secondSelector, items, classes, placeholders, inpSelector }) => {
    let classArr = classes,
        placeHolders = placeholders,
        input = document.querySelector(inpSelector),
        targetObserve = document.querySelector(firstSelector),
        secondTargetObserve = document.querySelector(secondSelector),
        targetChange = document.querySelectorAll(items);

    const changePlaceholder = (n = 0) => {
        input.placeholder = placeHolders[n];
    };

    const changeItem = (n = 0, check = true) => {
        console.log('test');
        if (check) {
            classArr.forEach(cls => {
                targetChange.forEach(el => {
                    el.classList.remove(cls);
                    el.classList.add(classArr[n]);
                });
            });
        }
        confirmValidation();
    };

    const observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.attributeName === 'data-slide') {
                currNumber = mutation.target.dataset.slide;
                changePlaceholder(currNumber);
                console.log(mutation.target, targetObserve);
                if (mutation.target === targetObserve.querySelector('.sliderInner')) {
                    changeItem(currNumber, true);
                }
                validation(false, true);
                if (mutation.target === secondTargetObserve) {
                    changeItem(currNumber, false);
                    if (+secondTargetObserve.dataset.slide > 0) {
                        confirm.cardNumber = true;
                    } else {
                        confirm.cardNumber = false;
                    }
                }
                confirmValidation();
            }
        };
    });
    const config = {
        attributes: true,
        subtree: true
    };
    observer.observe(targetObserve, config);
    observer.observe(secondTargetObserve, config);
};

const changeWidth = (w) => {
    let items = document.querySelectorAll('.item');
    items.forEach(el => {
        el.style.width = `${w}px`;
        el.style.minWidth = `${w}px`;
    });
};
changeWidth(windowWidth - 30);

window.addEventListener('DOMContentLoaded', () => {
    customSlider('.withdrawTypeSlider', '.sliderWrapp', '.sliderInner', '.item', true, -15);
    customSlider('.cardNumberSlider', '.sliderWrapp', '.sliderInner', '.item', true, -15);
    observeItems({
        firstSelector: '.withdrawTypeSlider', 
        secondSelector: '.cardNumberSlider .sliderInner',
        items: '.cardNumberSlider .item',
        inpSelector: '.cardNumberSlider .input input',
        classes: ['card', 'qiwi', 'webMoney'],
        placeholders: ['Номер карты получателя', '+79998549853', 'E585645432280']
    });

    input.addEventListener('input', () => {
        validation(getValidationType(currNumber, false));
        confirmValidation();
    });

    sumInput.addEventListener('input', () => {
        calculateCommision();
        confirmValidation();
    });
    modal('.send', '.paySuccess');
});

window.addEventListener('resize', () => {
    windowWidth = document.documentElement.offsetWidth;
    changeWidth(windowWidth - 30);
});