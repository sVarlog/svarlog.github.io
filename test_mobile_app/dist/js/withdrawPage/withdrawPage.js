/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/customSlider.js":
/*!*************************************!*\
  !*** ./src/modules/customSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const customSlider = (sliderSelector, wrappSelector, sliderInnerSelector, itemSelector, dots, padding = 0) => {
    let slider = document.querySelector(sliderSelector),
        wrap = slider.querySelector(wrappSelector),
        inner = slider.querySelector(sliderInnerSelector),
        items = slider.querySelectorAll(itemSelector),
        itemWidth = null,
        windowWidth = document.body.offsetWidth,
        currentSlide = 0,
        pd = padding;

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
            inner.style.transform = `translateX(-${(+itemWidth + newPd) * +currentSlide}px)`;
            inner.setAttribute('data-slide', currentSlide);
        } else if (dir === 'right') {
            if (currentSlide <= 0) {
                currentSlide = 0;
            } else {
                currentSlide -= 1;
            }
            changeDot(currentSlide);
            inner.style.transform = `translateX(-${(+itemWidth + newPd) * +currentSlide}px)`;
            inner.setAttribute('data-slide', currentSlide);
        } else if (typeof(dir) === 'number') {
            inner.style.transform = `translateX(-${(+itemWidth + newPd) * dir}px)`;
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
const modals = (modalOpen, modalWrapp) => {
    let modal = document.querySelector(modalWrapp),
        btn = document.querySelectorAll(modalOpen),
        swipe = null;

    const modalHide = (eStart, type = 'click') => {
        let t = eStart.target,
            startY = eStart.targetTouches[0].pageY;
        if (t.classList.contains('modal') && type === 'click') {
            modal.style.transition = ".5s";
            modal.classList.remove('active');
            modal.removeEventListener('touchstart', modalHide);
            document.body.classList.remove('modalActive');
        } else {
            swipe = modal.addEventListener('touchmove', (e) => {
                if ((e.changedTouches[0].pageY) > (startY + 50)) {
                    modal.style.transition = ".5s";
                    modal.classList.remove('active');
                    modal.removeEventListener('touchstart', modalHide);
                    swipe = null;
                    document.body.classList.remove('modalActive');
                }
            });
        }
    };

    const modalShow = (e) => {
        e.preventDefault();
        modal.style.transition = "0s";
        document.body.classList.add('modalActive');
        modal.classList.add('active');
        modal.addEventListener('touchstart', modalHide);
    };

    btn.forEach(el => {
        el.addEventListener('click', modalShow);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/withdrawPage.js":
/*!*****************************!*\
  !*** ./src/withdrawPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/customSlider.js */ "./src/modules/customSlider.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");



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
    (0,_modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__.default)('.withdrawTypeSlider', '.sliderWrapp', '.sliderInner', '.item', true, -15);
    (0,_modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__.default)('.cardNumberSlider', '.sliderWrapp', '.sliderInner', '.item', true, -15);
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
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.send', '.paySuccess');
});

window.addEventListener('resize', () => {
    windowWidth = document.documentElement.offsetWidth;
    changeWidth(windowWidth - 30);
});

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
/******/ 	__webpack_require__("./src/withdrawPage.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=withdrawPage.js.map