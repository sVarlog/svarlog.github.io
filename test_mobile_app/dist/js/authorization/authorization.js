/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/authorization.js":
/*!******************************!*\
  !*** ./src/authorization.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_authorizationValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/authorizationValidation.js */ "./src/modules/authorizationValidation.js");


const authInit = () => {
    let formWrapp = document.querySelector('.authorization'),
        firstPart = formWrapp.querySelector('.firstPart'),
        secondPart = formWrapp.querySelector('.halfRegistration'),
        loginPart = formWrapp.querySelector('.login'),
        forgotPart = formWrapp.querySelector('.forgot'),
        changeBtns = formWrapp.querySelectorAll('.registerItem'),
        backBtn = formWrapp.querySelector('button.back'),
        toBackItems = formWrapp.querySelectorAll('.toBack'),
        send = formWrapp.querySelector('button.registration'),
        validationInput = formWrapp.querySelector('.inputPhone'),
        inpOne = formWrapp.querySelector('.passWrapp .passFirst'),
        inpSec = formWrapp.querySelector('.passWrapp .passRepeat'),
        enterBtns = formWrapp.querySelectorAll('.enter'),
        forgotPassBtn = formWrapp.querySelector('.forgotPass'),
        toLoginBtn = formWrapp.querySelector('.toLogin');

    send.setAttribute('disabled', true);

    const showItem = (n = 0) => {
        let items = [firstPart, secondPart, loginPart, forgotPart];
        items.forEach((el, i) => {
            el.classList.remove('active');
            if (i === n) {
                el.classList.add('active');
            }
        });
    };
    showItem();

    changeBtns.forEach(el => {
        el.addEventListener('click', () => {
            showItem(1);
        });
    });
    backBtn.addEventListener('click', () => {
        showItem(0);
    });
    validationInput.addEventListener('input', () => {
        const fnNum = () => {
            (0,_modules_authorizationValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkBtn)('phone', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration')
        };

        const fnEmail = () => {
            (0,_modules_authorizationValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkBtn)('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration')
        };

        (0,_modules_authorizationValidation_js__WEBPACK_IMPORTED_MODULE_0__.validation)(formWrapp, validationInput, 'label span', '.passWrapp', 'Телефон', 'Email', 'Телефон или Email', fnNum, fnEmail);
    });
    inpOne.addEventListener('input', () => {
        (0,_modules_authorizationValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkBtn)('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration');
    });
    inpSec.addEventListener('input', () => {
        (0,_modules_authorizationValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkBtn)('email', '.inputPhone', '.passWrapp .passFirst', '.passWrapp .passRepeat', 'button.registration');
    });
    enterBtns.forEach(el => {
        el.addEventListener('click', () => {
            showItem(2);
        });
    });
    forgotPassBtn.addEventListener('click', () => {
        showItem(3);
    });
    toLoginBtn.addEventListener('click', () => {
        showItem(2);
    });
    toBackItems.forEach(el => {
        el.addEventListener('click', () => {
            showItem(0);
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    authInit();
});

/***/ }),

/***/ "./src/modules/authorizationValidation.js":
/*!************************************************!*\
  !*** ./src/modules/authorizationValidation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkBtn": () => /* binding */ checkBtn,
/* harmony export */   "validation": () => /* binding */ validation
/* harmony export */ });
const checkBtn = (type, iSelector, fSelector, sSelector, btnSelector) => {
    let validationInput = document.querySelector(iSelector),
        inpOne = document.querySelector(fSelector),
        inpSec = document.querySelector(sSelector),
        btn = document.querySelector(btnSelector);

    const validateEmail = (val) => {
        let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return reg.test(val);
    }

    if (type === 'phone') {
        if (validationInput.value.length > 10) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', true);
        }
    } else if (type === 'email') {
        if (validateEmail(validationInput.value) && inpOne.value === inpSec.value && inpOne.value != '') {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', true);
        }
    }
};

const validation = (fWrapp, el, lText, pWrap, firstT, secondT, thirdT, funcNumber, funcEmail) => {
    let formWrapp = fWrapp,
        inputVal = el.value,
        labelText = formWrapp.querySelector(lText),
        passWrapp = formWrapp.querySelector(pWrap);

    const number = () => {
        labelText.innerText = firstT;
        labelText.classList.add('active');
        passWrapp.classList.remove('active');
        funcNumber();
    };

    const email = () => {
        labelText.innerText = secondT;
        labelText.classList.add('active');
        passWrapp.classList.add('active');
        funcEmail();
    };

    if (!inputVal.match(/\D/g) && inputVal.length > 0) {
        number();
    } else if (inputVal.match(/(\d|\D)/g) && inputVal.length > 0) {
        email();
    } else if (inputVal.length === 0) {
        labelText.innerText = thirdT;
        labelText.classList.remove('active');
        passWrapp.classList.remove('active');
    }
};



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
/******/ 	__webpack_require__("./src/authorization.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=authorization.js.map