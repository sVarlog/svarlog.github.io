import customSlider from './modules/customSlider.js';

const rangeInit = () => {
    let wrapp = document.querySelector('.income'),
        input1 = wrapp.querySelector('.first .input input'),
        inputLabel1 = wrapp.querySelector('.first .inputTextNumber'),
        inputLabel1Num = wrapp.querySelector('.first .inputTextNumber .num'),
        input2 = wrapp.querySelector('.second .input input'),
        inputLabel2 = wrapp.querySelector('.second .inputTextNumber'),
        inputLabel2Num = wrapp.querySelector('.second .inputTextNumber .num'),
        current = '$';

    const setLabel = (input, label, labelText, step, type) => {
        let newStr = (+input.value * step).toString(),
            onePercent = input.parentNode.offsetWidth / 100;
        if (type === 'number') {
            labelText.innerHTML = newStr.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
        } else if (type === 'curr') {
            labelText.innerHTML = (+newStr + +input.dataset.startValue).toFixed(2);
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
            currValue = (+input2.dataset.move * val2) + +input2.dataset.startValue,
            subValue = (+input1.dataset.move * val1),
            oldValFrom = ((subValue / 100) * 1) * currValue,
            oldValTo = ((subValue / 100) * 5) * currValue,
            newValFrom = ((subValue / 100) * 4) * currValue,
            newValTo = ((subValue / 100) * 9) * currValue;
        startOld.innerHTML = oldValFrom + current;
        endOld.innerHTML = oldValTo + current;
        startNew.innerHTML = newValFrom + current;
        endNew.innerHTML = newValTo + current;
    };
    changeNumbers(input1.value, input2.value);

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
    customSlider('.workSlider', '.sliderWrapp', '.sliderInner', '.item', true, -15, 100);
    observe();
    rangeInit();
});