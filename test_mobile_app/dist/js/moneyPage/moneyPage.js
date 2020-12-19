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
const customSlider = (sliderSelector, sliderInnerSelector, itemSelector) => {
    let slider = document.querySelector(sliderSelector),
        inner = slider.querySelector(sliderInnerSelector),
        items = slider.querySelectorAll(itemSelector),
        itemWidth = null,
        windowWidth = document.body.offsetWidth,
        currentSlide = 0;

    const move = (dir) => {
        if (dir === 'left') {
            if (currentSlide >= items.length - 1) {
                currentSlide = items.length - 1;
            } else {
                currentSlide += 1;
            }
            inner.style.transform = `translateX(-${+itemWidth * +currentSlide - 15}px)`;
        } else if (dir === 'right') {
            if (currentSlide < 0) {
                currentSlide = 0;
            } else {
                currentSlide -= 1;
            }
            inner.style.transform = `translateX(-${+itemWidth * +currentSlide}px)`;
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
        if (((+itemWidth + 15) * +items.length + 15) >= +windowWidth) {
            start();
        } else {
            disable();
        }
    };

    const init = () => {
        itemWidth = items[0].offsetWidth;
        windowWidth = document.body.offsetWidth;
        inner.style.width = `${(itemWidth + 15) * items.length}px`;
        events();
    }
    init();

    window.addEventListener('resize', () => {
        init();
    })

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

/***/ "./src/moneyPage.js":
/*!**************************!*\
  !*** ./src/moneyPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/customSlider.js */ "./src/modules/customSlider.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__.default)('.customSlider', '.sliderInner', '.item');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.openModalProcessed', '.modalProcessed');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.openRebilsModal', '.modalRebils');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.openPercentModal', '.modalPercent');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.balance', '.modalBalance');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.openExpectedIncomeModal', '.expectedIncomeModal');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.openExpectedIncomeFreeModal', '.expectedIncomeFreeModal');
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__.default)('.openTotalIncomeModal', '.totalIncomeModal');
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
/******/ 	__webpack_require__("./src/moneyPage.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=moneyPage.js.map