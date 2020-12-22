/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/makeFriendCard.js":
/*!*******************************!*\
  !*** ./src/makeFriendCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm.js */ "./src/modules/sendForm.js");
/* harmony import */ var _modules_friendCardValidation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/friendCardValidation.js */ "./src/modules/friendCardValidation.js");




window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('button.modalOpen', '.modal');
    (0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_1__.default)('.modal', '.modalLoad', '.modalConfirm', '.modalConfirm .send');
    (0,_modules_friendCardValidation_js__WEBPACK_IMPORTED_MODULE_2__.default)('.modal form', '.inputWrapp .input input', '.inputWrapp .input .card img', '.inputWrapp .input', '.inputWrapp .next', 'button.submit');
});

/***/ }),

/***/ "./src/modules/friendCardValidation.js":
/*!*********************************************!*\
  !*** ./src/modules/friendCardValidation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
            let newCardNumber = cardNumber.replace(/\s/g, '');
            let newStr = newCardNumber.substring(newCardNumber.length - 4, newCardNumber.length);
            input[0].value = `***${newStr}`;
        }
    };

    const showInputs = () => {
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
            img.src = imgSrc.replace(filename, '') + 'Visa.svg';
        } else if (n === 2) {
            img.src = imgSrc.replace(filename, '') + 'Mir.svg';
        } else if (n === 5) {
            img.src = imgSrc.replace(filename, '') + 'MasterCard.svg';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);

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
const sendForm = (modalSelector, loadItem, confirmModal, confirmSend) => {
    let modal = document.querySelector(modalSelector),
        sendBtn = document.querySelector(confirmSend),
        formData = modal.querySelector('form'),
        conrfirm = document.querySelector(confirmModal),
        conrfirmClose = conrfirm.querySelector('.modalClose'),
        loadModal = document.querySelector(loadItem),
        form = modal.querySelector('form'),
        loadItems = loadModal.querySelectorAll('span'),
        seconds = loadModal.querySelector('#seconds'),
        totalSeconds = 15,
        curr = 0;

    const formReset = () => {
        conrfirm.classList.remove('active');
        formData.reset();
    };

    const complete = () => {
        conrfirm.classList.add('active');
        conrfirmClose.addEventListener('click', () => {
            formReset();
            document.body.classList.remove('modalActive');
        });
    };

    const loading = () => {
        loadModal.classList.add('active');
        document.body.classList.add('modalActive');
        let process = () => {
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
            document.body.classList.remove('active');
        }, totalSeconds * 1000);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formData.reset();
        modal.classList.remove('active');
        complete();
    });

    console.log(confirmSend);

    sendBtn.addEventListener('click', () => {
        conrfirm.classList.remove('active');
        loading();
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);

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
/******/ 	__webpack_require__("./src/makeFriendCard.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=makeFriendCard.js.map