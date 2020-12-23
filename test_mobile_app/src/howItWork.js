import customSlider from './modules/customSlider.js';

const rangeInit = () => {
    let wrapp = document.querySelector('.income'),
        input1 = wrapp.querySelector('.first .input input'),
        inputLabel1 = wrapp.querySelector('.first .inputTextNumber'),
        inputLabel1Num = wrapp.querySelector('.first .inputTextNumber .num'),
        input2 = wrapp.querySelector('.second .input input'),
        inputLabel2 = wrapp.querySelector('.second .inputTextNumber'),
        inputLabel2Num = wrapp.querySelector('.second .inputTextNumber .num'),
        changeCurrBtns = wrapp.querySelectorAll('.buttons .btn');
    
    // here need add current exchange rate
    let currValues ={
        usd: {
            rate: 1,
            icon: '$'
        },
        rub: {
            rate: 74.98,
            icon: '₽'
        },
        euro: {
            rate: 0.82,
            icon: '€'
        }
    };

    let currItem = currValues.usd;
    
    let current = {
        rate: currItem.rate,
        icon: currItem.icon
    };

    let moneyValue = {
        0: 4.99,
        1: 27.49,
        2: 49.99,
        3: 72.49,
        4: 94.99
    };

    const setStepPrice = () => {
        let stepWrapp = wrapp.querySelector('.second .stepsValue'),
            val1 = stepWrapp.querySelector('.first'),
            val2 = stepWrapp.querySelector('.second'),
            val3 = stepWrapp.querySelector('.third'),
            val4 = stepWrapp.querySelector('.four'),
            val5 = stepWrapp.querySelector('.five');
        const values = [val1, val2, val3, val4, val5];

        console.log(current);

        values.forEach((el, i) => {
            el.innerHTML = `${(moneyValue[i] * current.rate).toFixed(2)}${current.icon}`;
        });
    };
    setStepPrice();

    const setLabel = (input, label, labelText, step, type) => {
        let newStr = ((+input.value * step) * current.rate).toString(),
            onePercent = input.parentNode.offsetWidth / 100;
        if (type === 'number') {
            console.log(current);
            console.log(current.icon);
            labelText.innerHTML = newStr.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
        } else if (type === 'curr') {
            labelText.innerHTML = `${(+newStr + +input.dataset.startValue).toFixed(2)} ${current.icon}`;
        }
        label.style.left = `${(input.value * 5 + 0.5) - ((label.offsetWidth / 2) / onePercent)}%`;
    };

    const setValue = (input, label, labelText, value, step, type) => {
        input.value = value;
        setLabel(input, label, labelText, step, type);
    };
    setValue(input1, inputLabel1, inputLabel1Num, 10, input1.dataset.move, 'number');
    setValue(input2, inputLabel2, inputLabel2Num, 10, input2.dataset.move, 'curr');

    const changeNumbers = (val1, val2) => {
        let startOld = wrapp.querySelector('.startOld'),
            endOld = wrapp.querySelector('.endOld'),
            startNew = wrapp.querySelector('.startNew'),
            endNew = wrapp.querySelector('.endNew'),
            currValue = ((+input2.dataset.move * val2) + +input2.dataset.startValue) * current.rate,
            subValue = (+input1.dataset.move * val1),
            oldValFrom = (((subValue / 100) * 1) * currValue).toFixed(0),
            oldValTo = (((subValue / 100) * 5) * currValue).toFixed(0),
            newValFrom = (((subValue / 100) * 4) * currValue).toFixed(0),
            newValTo = (((subValue / 100) * 9) * currValue).toFixed(0);
        startOld.innerHTML = oldValFrom + current.icon;
        endOld.innerHTML = oldValTo + current.icon;
        startNew.innerHTML = newValFrom + current.icon;
        endNew.innerHTML = newValTo + current.icon;
    };
    changeNumbers(input1.value, input2.value);

    const btnClick = (n) => {
        changeCurrBtns.forEach((el, i) => {
            el.classList.remove('active');
            if (n === i) {
                el.classList.add('active');
            }
        });
        current = {
            rate: currValues[Object.keys(currValues)[n]].rate,
            icon: currValues[Object.keys(currValues)[n]].icon
        };
        currItem = currValues[Object.keys(currValues)[n]];
        setValue(input2, inputLabel2, inputLabel2Num, 10, input2.dataset.move, 'curr');
        changeNumbers(input1.value, input2.value);
        changeNumbers(input1.value, input2.value);
        setStepPrice();
    };

    changeCurrBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            btnClick(i);
        });
    });

    input1.addEventListener('input', () => {
        setLabel(input1, inputLabel1, inputLabel1Num, input1.dataset.move, 'number');
        changeNumbers(input1.value, input2.value);
    });
    input2.addEventListener('input', () => {
        setLabel(input2, inputLabel2, inputLabel2Num, input2.dataset.move, 'curr');
        changeNumbers(input1.value, input2.value);
    });
};

const observe = () => {
    let targetObserve = document.querySelector('.workSlider .sliderInner'),
        targetChange = document.querySelector('.workSlider .sliderText'),
        textItems = targetChange.querySelectorAll('.textItem'),
        currNumber = 0;

    const change = (n) => {
        textItems.forEach(el => {
            el.classList.remove('active');
        });
        textItems[n].classList.add('active');
    };
    
    const observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.attributeName === 'data-slide') {
                currNumber = mutation.target.dataset.slide;
                change(currNumber);
            }
        };
    });
    const config = {
        attributes: true,
        subtree: true
    };
    observer.observe(targetObserve, config);
};

window.addEventListener('DOMContentLoaded', () => {
    customSlider('.workSlider', '.sliderWrapp', '.sliderInner', '.item', false, -15, 100);
    observe();
    rangeInit();
});