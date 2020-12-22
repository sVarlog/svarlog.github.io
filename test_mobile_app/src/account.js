import modal from './modules/modal.js';
import customSlider from './modules/customSlider.js';

let btn = document.querySelector('.modalGift .showForm'),
    nText = document.querySelector('.modalGift .numberText'),
    progressNumbers = document.querySelector('.modalGift .numbers'),
    observerTarget = document.querySelector('.modalGift .customSlider .sliderInner'),
    currNumber = 1,
    logoutBtn = document.querySelector('.page-account_logout'),
    complainBtn = document.querySelector('.complainMenu'),
    shareBtn1 = document.querySelector('.share'),
    shareBtn2 = document.querySelector('.share2');

btn.setAttribute('disabled', true);

const giftState = {
    friends: 18500,
};

const progressItems = {
    0: 0,
    1: 7000,
    2: 27000,
    3: 97000,
    4: 247000
};

const initFormStep = () => {
    let wrapp = document.querySelector('.reasonComplainModal '),
        choseBtns = wrapp.querySelectorAll('.showForm'),
        forms = wrapp.querySelectorAll('form'),
        textContent = wrapp.querySelector('.content'),
        backBtn = wrapp.querySelector('.backToForms');

    const show = (n) => {
        forms[n].classList.add('show');
        textContent.classList.remove('show');
        backBtn.classList.add('active');
    };

    const hide = () => {
        forms.forEach(el => el.classList.remove('show'));
        textContent.classList.add('show');
        backBtn.classList.remove('active');
    };

    backBtn.addEventListener('click', hide);

    choseBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            show(i);
        });
    });
};

const checkBtn = (bool, num) => {
    if (bool) {
        btn.removeAttribute('disabled');
        nText.innerHTML = '(выполнено)';
    } else {
        btn.setAttribute('disabled', true);
        nText.innerHTML = '';
    }
    progressNumbers.innerHTML = `${progressItems[num - 1]}-${progressItems[num]}`;
};

const proggress = (item) => {
    let progressInner = document.querySelector('.modal .progressInner'),
        curr = giftState.friends;

    const getPercent = () => {
        let percent = 0;
        if (curr > progressItems[item]) {
            percent = 100;
            checkBtn(true, item);
        } else {
            percent = (curr / progressItems[item]) * 100;
            checkBtn(false, item);
        }
        return percent;
    };
    progressInner.style.width = `${getPercent()}%`;
};
proggress(currNumber);

const showForm = (bool = true) => {
    let btn = document.querySelector('.modal .showForm'),
        form = document.querySelector('.modal .itemForm');
        
    const formHide = () => {
        btn.classList.remove('hidden');
        form.classList.remove('active');
        form.classList.remove('confirm');
    };
    
    const formShow = () => {
        btn.classList.add('hidden');
        form.classList.add('active');
    };
        
    if (!bool) {
        formHide();
    }

    btn.addEventListener('click', () => {
        formShow();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('confirm');
    });
};

const observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.attributeName === 'data-slide') {
            currNumber = +mutation.target.dataset.slide;
            proggress(currNumber + 1);
            showForm(false);
        }
    };
});
const observerConfig = {
    attributes: true,
    subtree: true
};
observer.observe(observerTarget, observerConfig);

window.addEventListener('load', () => {
    modal('.acMenu', '.modalSetting');
    modal('.page-account__buttonSetting .gift', '.modalGift');
    showForm();
    customSlider('.modalGift .customSlider', '.sliderWrapp', '.sliderInner', '.item', false, 5, 95);
    if (logoutBtn) {
        modal('.page-account_logout', '.modalLogout');
    }
    if (complainBtn) {
        modal('.complainMenu', '.complainModal');
        initFormStep();
        modal('.complainBtn', '.reasonComplainModal');
    }
    if (shareBtn1) {
        modal('.share', '.modalShare');
    }
    if (shareBtn2) {
        modal('.share2', '.modalShare');
    }
});