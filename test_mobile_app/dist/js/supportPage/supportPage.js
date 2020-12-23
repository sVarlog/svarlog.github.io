/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/supportPage.js":
/*!****************************!*\
  !*** ./src/supportPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");


const tabs = (sectionSelector, mainBtnSelector, secondBtnSelector, mainContentSelector, seconContentSelector) => {
    let section = document.querySelector(sectionSelector),
        mainBtns = section.querySelectorAll(mainBtnSelector),
        secondBtns = section.querySelectorAll(secondBtnSelector),
        contentsMain = section.querySelectorAll(mainContentSelector),
        contentsSecond = section.querySelectorAll(seconContentSelector);
    let mainContentsHeight = [],
        secondContentsHeight = [];

    const firstRender = () => {
        contentsSecond.forEach(el => {
            secondContentsHeight.push(el.offsetHeight);
            el.style.height = 0;
        });

        contentsMain.forEach(el => {
            mainContentsHeight.push(el.offsetHeight);
            el.style.height = 0;
        });
    };
    firstRender();
    console.log(mainContentsHeight,secondContentsHeight);

    const tabShow = (type, i) => {
        console.log(i);
        if (type === 'main') {
            if (contentsMain[i].classList.contains('active')) {
                mainBtns[i].classList.remove('active');
                contentsMain[i].style.height = `0`;
                contentsMain[i].style.minHeight = `0`;
                contentsMain[i].classList.remove('active');
            } else {
                mainBtns[i].classList.add('active');
                contentsMain[i].style.minHeight = `${mainContentsHeight[i]}px`;
                contentsMain[i].style.height = `auto`;
                contentsMain[i].classList.add('active');
            }
        } else if (type === 'second') {
            if (contentsSecond[i].classList.contains('active')) {
                contentsSecond[i].style.height = `0`;
                contentsSecond[i].style.minHeight = `0`;
                contentsSecond[i].classList.remove('active');
            } else {
                contentsSecond[i].style.minHeight = `${contentsSecond[i]}px`;
                contentsSecond[i].style.height = `auto`;
                contentsSecond[i].classList.add('active');
            }
        }
    };

    mainBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            tabShow('main', i);
        });
    });

    secondBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            tabShow('second', i);
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabs', '.tabBtn.first', '.tabBtn.second', '.tabContent.first', '.tabContent.second');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)('.modalShowContent', '.modalLink');
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
/******/ 	__webpack_require__("./src/supportPage.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=supportPage.js.map