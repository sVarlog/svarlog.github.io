/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm.js */ "./src/modules/sendForm.js");



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('button.modalOpen', '.modal');
    (0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_1__.default)('.modal', '.modalLoad');
});

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
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.js */ "./src/modules/validation.js");


const modals = (modalOpen, modalWrapp) => {
    let modal = document.querySelector(modalWrapp),
        btn = document.querySelector(modalOpen),
        swipe = null;

    const modalHide = (eStart, type = 'click') => {
        let t = eStart.target,
            startY = eStart.targetTouches[0].pageY;
        if (t.classList.contains('modal') && type === 'click') {
            modal.classList.remove('active');
            modal.removeEventListener('touchstart', modalHide);
        } else {
            swipe = modal.addEventListener('touchmove', (e) => {
                if ((e.changedTouches[0].pageY) > (startY + 50 || startY - 50)) {
                    modal.classList.remove('active');
                    modal.removeEventListener('touchstart', modalHide);
                    swipe = null;
                }
            });
        }
    };

    const modalShow = () => {
        modal.classList.add('active');
        modal.addEventListener('touchstart', modalHide);
        (0,_validation_js__WEBPACK_IMPORTED_MODULE_0__.default)('.inputWrapp .input input', '.inputWrapp .input .card img', '.inputWrapp .input', '.inputWrapp .next', 'button.submit');
    };

    btn.addEventListener('click', modalShow);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const sendForm = (modalSelector, loadItem) => {
    console.log(loadItem);
    let modal = document.querySelector(modalSelector),
        loadModal = document.querySelector(loadItem),
        form = modal.querySelector('form'),
        loadItems = loadModal.querySelectorAll('span'),
        seconds = loadModal.querySelector('#seconds'),
        totalSeconds = 15,
        curr = 0;

    const loading = () => {
        loadModal.classList.add('active');
        let process = () => {
            console.log(curr);
            curr++;
            if (curr >= loadItems.length - 1) {
                curr = 0;
            }
            loadItems.forEach((el, i) => {
                el.classList.remove('active');
                if (i === curr) {
                    el.classList.add('active');
                }
            });
            if (totalSeconds > 0) {
                seconds.innerHTML = totalSeconds -= 1;
            }
        };
        process();

        let timer = setInterval(process, 1000);

        setTimeout(() => {
            clearInterval(timer);
            loadModal.classList.remove('active');
        }, totalSeconds * 1000);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        loading();
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map