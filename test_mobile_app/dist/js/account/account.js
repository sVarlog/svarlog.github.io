/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/account.js":
/*!************************!*\
  !*** ./src/account.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
/* harmony import */ var _modules_customSlider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/customSlider.js */ "./src/modules/customSlider.js");



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
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.acMenu', '.modalSetting');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.page-account__buttonSetting .gift', '.modalGift');
    showForm();
    (0,_modules_customSlider_js__WEBPACK_IMPORTED_MODULE_1__.default)('.modalGift .customSlider', '.sliderWrapp', '.sliderInner', '.item', false, 0, 100);
    if (logoutBtn) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.page-account_logout', '.modalLogout');
    }
    if (complainBtn) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.complainMenu', '.complainModal');
        initFormStep();
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.complainBtn', '.reasonComplainModal');
    }
    if (shareBtn1) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.share', '.modalShare');
    }
    if (shareBtn2) {
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.share2', '.modalShare');
    }
});

/***/ }),

/***/ "./src/modules/customSlider.js":
/*!*************************************!*\
  !*** ./src/modules/customSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const customSlider = (sliderSelector, wrappSelector, sliderInnerSelector, itemSelector, dots, padding = 0, stepWidht = 100) => {
    let slider = document.querySelector(sliderSelector),
        wrap = slider.querySelector(wrappSelector),
        inner = slider.querySelector(sliderInnerSelector),
        items = slider.querySelectorAll(itemSelector),
        itemWidth = null,
        windowWidth = document.body.offsetWidth,
        currentSlide = 0,
        pd = padding;

    inner.setAttribute('data-slide', 0);

    const changeDot = (n) => {
        if (wrap.querySelector('.dotsArea')) {
            let dots = wrap.querySelectorAll('.dot');
            dots.forEach((el, i) => {
                el.classList.remove('active');
                if (i === n) {
                    el.classList.add('active');
                }
            });
        }
    };

    const move = (dir) => {
        let newPd = pd * -1;
        if (dir === 'left') {
            if (currentSlide >= items.length - 1) {
                currentSlide = items.length - 1;
            } else {
                currentSlide += 1;
            }
            changeDot(currentSlide);
            inner.style.transform = `translateX(-${((+itemWidth + newPd) * +currentSlide) * (stepWidht / 100)}px)`;
            inner.setAttribute('data-slide', currentSlide);
        } else if (dir === 'right') {
            if (currentSlide <= 0) {
                currentSlide = 0;
            } else {
                currentSlide -= 1;
            }
            changeDot(currentSlide);
            inner.style.transform = `translateX(-${((+itemWidth + newPd) * +currentSlide) * (stepWidht / 100)}px)`;
            inner.setAttribute('data-slide', currentSlide);
        } else if (typeof(dir) === 'number') {
            inner.style.transform = `translateX(-${((+itemWidth + newPd) * dir) * (stepWidht / 100)}px)`;
            inner.setAttribute('data-slide', dir);
        }
    };

    const dotsClick = () => {
        if (wrap.querySelector('.dotsArea')) {
            let dots = wrap.querySelectorAll('.dot');
            dots.forEach(el => {
                el.addEventListener('click', () => {
                    changeDot(+el.dataset.dot);
                    move(+el.dataset.dot);
                });
            });
        }
    };
    
    let xDown = null;

    const getTouches = (evt) => {
        return evt.touches || evt.originalEvent.touches;
    }

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
    };

    const handleTouchMove = (evt) => {
        if (!xDown) {
            return;
        }

        let xUp = evt.touches[0].clientX,
            xDiff = xDown - xUp;

        if (Math.abs(xDiff)) {
            if (xDiff > 0) {
                move('left');
            } else {
                move('right');
            }
        }
        xDown = null;
    };

    const start = () => {
        items.forEach(el => {
            el.addEventListener('touchstart', handleTouchStart, false);
        });
        items.forEach(el => {
            el.addEventListener('touchmove', handleTouchMove, false);
        });
    };

    const disable = () => {
        items.forEach(el => {
            el.removeEventListener('touchstart', handleTouchStart, false);
        });
        items.forEach(el => {
            el.removeEventListener('touchmove', handleTouchMove, false);
        });
        inner.style.transform = 'translateX(0)';
    };

    const events = () => {
        if (((+itemWidth + pd) * +items.length + pd) >= +windowWidth) {
            start();
        } else {
            disable();
        }
    };

    const init = () => {
        itemWidth = items[0].offsetWidth;
        windowWidth = document.body.offsetWidth;
        inner.style.width = `${(itemWidth + pd) * items.length}px`;
        events();
    }
    init();

    if (dots === true) {
        let dotsArea = document.createElement('div');
        dotsArea.classList.add('dotsArea');

        for (let i = 0; i < items.length; i++) {
            let dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.setAttribute('data-dot', i);
            dotsArea.append(dot);
        }

        wrap.append(dotsArea);
        dotsClick();
    }

    window.addEventListener('resize', () => {
        init();
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customSlider);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
let startY = null,
    startX = null;

const modals = (modalOpen, modalWrapp) => {
    let modal = document.querySelector(modalWrapp),
        btn = document.querySelectorAll(modalOpen);

    const modalHide = (eStart, type = 'click', end = false) => {
        if (end) {
            startX = 0, startY = 0;
            modal.removeEventListener('touchmove', (e) => hide('move', e));
            return;
        } else {
            startY = eStart.targetTouches[0].pageY,
            startX = eStart.targetTouches[0].pageX;
            
            let t = eStart.target;


            console.log(startY);

            const hide = (eType, event1) => {
                if (eType === 'click') {
                    modal.style.transition = ".25s";
                    modal.classList.remove('active');
                    document.body.classList.remove('modalActive');
                } else if (eType === 'move') {
                    if ((event1.changedTouches[0].pageX) > (startX + 75) || (event1.changedTouches[0].pageX) < (startX - 75)) {
                        return;
                    }
                    if ((event1.changedTouches[0].pageY) > (startY + 125)) {
                        modal.style.transition = ".25s";
                        modal.classList.remove('active');
                        document.body.classList.remove('modalActive');
                    }
                }
                modal.removeEventListener('touchmove', (e) => hide('move', e));
            };

            if (t.classList.contains('modal') || t.classList.contains('modalWrapp') || t.classList.contains('modalClose') && type === 'click') {
                hide('click');
            } else {
                modal.addEventListener('touchmove', (e) => hide('move', e));
            }
        }
    };

    const modalShow = (e) => {
        e.preventDefault();
        document.body.classList.add('modalActive');
        modal.classList.add('active');
        modal.addEventListener('touchstart', modalHide);
        modal.addEventListener('touchend', () => {
            startY = null,
            startX = null;
            modal.removeEventListener('touchmove', modalHide);
        });
    };

    btn.forEach(el => {
        el.addEventListener('click', modalShow);
    });

    modal.addEventListener('touchend', (e) => {
        modalHide(e, 'click', true);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/account.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=account.js.map