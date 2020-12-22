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
        console.log('start');
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
        console.log('events');
        console.log(((+itemWidth + pd) * +items.length + pd), windowWidth);
        console.log(itemWidth);
        console.log(items[0]);
        if (((+itemWidth + pd) * +items.length + pd) >= +windowWidth) {
            console.log('work');
            start();
        } else {
            disable();
        }
    };

    const init = () => {
        itemWidth = items[0].offsetWidth;
        console.log(itemWidth);
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
                    modal.style.transition = ".5s";
                    modal.classList.remove('active');
                    document.body.classList.remove('modalActive');
                } else if (eType === 'move') {
                    if ((event1.changedTouches[0].pageX) > (startX + 75) || (event1.changedTouches[0].pageX) < (startX - 75)) {
                        console.log(event1.changedTouches[0].pageX, startX, event1.changedTouches[0].pageY, startY + 125);
                        return
                    }
                    if ((event1.changedTouches[0].pageY) > (startY + 125)) {
                        modal.style.transition = ".5s";
                        modal.classList.remove('active');
                        document.body.classList.remove('modalActive');
                    }
                }
                modal.removeEventListener('touchmove', (e) => hide('move', e));
            };

            if (t.classList.contains('modal') && type === 'click') {
                hide('click');
            } else {
                modal.addEventListener('touchmove', (e) => hide('move', e));
            }
        }
    };

    const modalShow = (e) => {
        e.preventDefault();
        modal.style.transition = "0s";
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

/***/ "./src/moneyPage.js":
/*!**************************!*\
  !*** ./src/moneyPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/customSlider.js */ "./src/modules/customSlider.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_customSlider_js__WEBPACK_IMPORTED_MODULE_0__.default)('.customSlider', '.sliderWrapp','.sliderInner', '.item', false, 15);
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