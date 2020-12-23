/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chatsPage.js":
/*!**************************!*\
  !*** ./src/chatsPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");


const stepsInit = () => {
    let wrapp = document.querySelector('.notificationModal'),
        step1 = wrapp.querySelector('.firstStep'),
        step2 = wrapp.querySelector('.secondStep'),
        step3 = wrapp.querySelector('.lastStep'),
        changeBtns = wrapp.querySelectorAll('.changeStep'),
        input1 = step2.querySelector('input'),
        input2 = step3.querySelector('input'),
        btn1 = step2.querySelector('.nextStep'),
        btn2 = step3.querySelector('.sendBtn');
    
    let steps = [step1, step2, step3];

    btn1.setAttribute('disabled', true);
    btn2.setAttribute('disabled', true);
    
    const validateEmail = (val) => {
        let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return reg.test(val);
    };
    
    const check = () => {
        if (validateEmail(input1.value)) {
            btn1.removeAttribute('disabled');
        } else {
            btn1.setAttribute('disabled', true);
        }
        if (input2.value.length >= 5) {
            btn2.removeAttribute('disabled');
        } else {
            btn2.setAttribute('disabled', true);
        }
    };
    check();

    const changeStep = (n = 0) => {
        steps.forEach((el, i) => {
            el.classList.remove('active');
            if (i === n) {
                el.classList.add('active');
            }
        });
    };
    changeStep();

    changeBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            changeStep(+el.dataset.step - 1);
        });
    });

    input1.addEventListener('input', () => {
        check();
    });
    input2.addEventListener('input', () => {
        check();
    });
};

window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.showNotification', '.notificationModal');
    stepsInit();
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
/******/ 	__webpack_require__("./src/chatsPage.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=chatsPage.js.map