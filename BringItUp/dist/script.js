/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_sliderMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/sliderMain */ "./src/js/modules/slider/sliderMain.js");
/* harmony import */ var _modules_playVideo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo.js */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_slider_sliderMini_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider/sliderMini.js */ "./src/js/modules/slider/sliderMini.js");
/* harmony import */ var _modules_difference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference.js */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms.js */ "./src/js/modules/forms.js");





window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_sliderMain__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.page',
    btns: '.next',
    resetSlidesSelector: '.sidecontrol .reset'
  });
  slider.render();
  const modulePageSlider = new _modules_slider_sliderMain__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btns: '.sidecontrol__controls .next',
    next: '.module__info-controls .next',
    prev: '.module__info-controls .prev'
  });
  modulePageSlider.render();
  const showUpSlider = new _modules_slider_sliderMini_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_sliderMini_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
    timePlay: 5000
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_sliderMini_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  const showPlayer = new _modules_playVideo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup .play', '.overlay');
  showPlayer.init();
  const player = new _modules_playVideo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('.module__video-item .play', '.overlay');
  player.init();
  const difference = new _modules_difference_js__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officernew', '.officer__card-item');
  difference.init();
  const forms = new _modules_forms_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.form');
  forms.init();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (e) {}
  }

  bindTriggers() {
    const showEvents = (elem, counter, itemsList) => {
      elem.addEventListener('click', () => {
        if (counter !== itemsList.length - 2) {
          itemsList[counter].style.display = 'flex';
          counter++;
        } else {
          itemsList[counter].style.display = 'flex';
          itemsList[itemsList.length - 1].remove();
        }
      });
    };

    showEvents(this.oldOfficer.querySelector('.plus'), this.oldCounter, this.oldItems);
    showEvents(this.newOfficer.querySelector('.plus'), this.newCounter, this.newItems);
  }

  hideItems() {
    const hideItems = items => {
      items.forEach((el, i, arr) => {
        if (i !== arr.length - 1) {
          el.style.display = 'none';
        }
      });
    };

    hideItems(this.oldItems);
    hideItems(this.newItems);
  }

  init() {
    try {
      this.hideItems();
      this.bindTriggers();
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Loading...',
      success: 'Thanks! We will contact with you soon!',
      failure: 'Something wrong...'
    }, this.path = 'assets/question.php';
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }

  initMask() {
    const setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    const createMask = event => {
      let matrix = '+1 (___) ___-____',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = event.target.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      event.target.value = matrix.replace(/./g, a => {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (event.target.value.length === 2) {
          event.target.value = '';
        }
      } else {
        setCursorPosition(event.target.value.length, event.target);
      }
    };

    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(el => {
      el.addEventListener('input', createMask);
      el.addEventListener('focus', createMask);
      el.addEventListener('blur', createMask);
    });
  }

  clearInputs() {
    this.inputs.forEach(el => {
      el.value = '';
    });
  }

  checkMainInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
    mailInputs.forEach(el => {
      el.addEventListener('input', function (e) {
        el.value = el.value.replace(/[^a-z 0-9 @ \. -]/ig, '');
      });
    });
  }

  init() {
    this.checkMainInputs();
    this.initMask();
    console.log(this.inputs);
    this.forms.forEach(el => {
      el.addEventListener('submit', e => {
        e.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    fonr-size: 18px;
                    color: grey;
                `;
        el.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(el);
        this.postData(this.path, formData).then(res => {
          console.log(res, 'res');
          statusMessage.textContent = this.message.success;
        }).catch(e => {
          console.log(e);
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  bindTriggers() {
    this.btns.forEach((el, i) => {
      try {
        const blockedElem = el.closest('.module__video-item').nextElementSibling;

        if (i % 2 === 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (e) {}

      el.addEventListener('click', () => {
        if (!el.closest('.module__video-item') || el.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = el;

          if (document.querySelector('iframe#frame')) {
            this.overlay.classList.add('active');

            if (this.path !== el.getAttribute('data-url')) {
              this.path = el.getAttribute('data-url');
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = el.getAttribute('data-url');
            this.createPlayer(this.path);
          }
        }
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.classList.remove('active');
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.classList.add('active');
  }

  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'PLAY VIDEO';
          blockedElem.querySelector('.play__text').classList.remove('attintion');
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = 'none';
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      let tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    container = null,
    next = null,
    btns = null,
    prev = null,
    resetSlidesSelector = null,
    activeClass = '',
    animate,
    autoplay,
    timePlay = 5000
  } = {}) {
    this.container = document.querySelector(container);

    try {
      this.slides = this.container.children;
    } catch (e) {}

    this.resetSlides = document.querySelectorAll(resetSlidesSelector);
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelectorAll(prev);
    this.next = document.querySelectorAll(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
    this.timePlay = timePlay;
  }

}

/***/ }),

/***/ "./src/js/modules/slider/sliderMain.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/sliderMain.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    if (this.hanson) {
      this.hanson.style.opacity = '0';

      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('fadeIn');
        }, 3000);
      } else {
        this.hanson.classList.remove('fadeIn');
      }
    }

    [...this.slides].forEach((el, i) => {
      el.style.display = 'none';

      if (i === this.slideIndex - 1) {
        el.style.display = 'block';
      }
    });
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers() {
    const btnClick = (elemets, dir) => {
      elemets.forEach(el => {
        el.addEventListener('click', () => {
          if (dir === 'next') {
            this.plusSlides(1);
          } else if (dir === 'prev') {
            this.plusSlides(-1);
          }
        });
      });
    };

    this.resetSlides.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    btnClick(this.btns, 'next');
    btnClick(this.prev, 'prev');
    btnClick(this.next, 'next');
    this.showSlides(this.slideIndex);
    console.log(this.prev, this.next); // document.querySelectorAll('.prevmodule').forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         e.stopPropagation();
    //         e.preventDefault();
    //         this.plusSlides(-1);
    //     });
    // });
    // document.querySelectorAll('.nextmodule').forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         e.stopPropagation();
    //         e.preventDefault();
    //         this.plusSlides(1);
    //     });
    // });
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) {}

      this.bindTriggers();
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/sliderMini.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/sliderMini.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
    this.timer = null;
  }

  decorizeSlides() {
    [...this.slides].forEach(el => {
      el.classList.remove(this.activeClass);

      if (this.animate) {
        el.querySelector('.card__title').style.opacity = '0.4';
        el.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });

    if (!this.slides[0].tagName !== 'BUTTON') {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
    this.appendBtns();
  }

  prevSlide() {
    let filteredSlides = [...this.slides].filter(el => el.tagName !== 'BUTTON'),
        active = filteredSlides[filteredSlides.length - 1];
    this.container.insertBefore(active, this.slides[0]);
    this.decorizeSlides();
    this.appendBtns();
  }

  appendBtns() {
    [...this.slides].forEach(el => {
      if (el.tagName == 'BUTTON') {
        this.container.appendChild(el);
      }
    });
  }

  bindTriggers() {
    this.next.forEach(el => el.addEventListener('click', () => this.nextSlide()));
    this.prev.forEach(el => el.addEventListener('click', () => this.prevSlide()));
  }

  setSliderPauseEvents(elements) {
    console.log(this.container);
    console.log(elements, 'elements');
    elements.forEach(el => {
      console.log(el);
      el.addEventListener('mouseenter', () => {
        console.log('pause');
        clearInterval(this.timer);
        this.timer = null;
      });
      el.addEventListener('mouseleave', () => {
        if (!this.timer) {
          this.timer = setInterval(() => this.nextSlide(), this.timePlay || 5000);
        }
      });
    });
  }

  init() {
    try {
      this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;
      this.bindTriggers();
      this.decorizeSlides();

      if (this.autoplay) {
        this.timer = setInterval(() => this.nextSlide(), this.timePlay || 5000);
        this.setSliderPauseEvents([this.next[0], this.prev[0], this.container]);
      }
    } catch (e) {}
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map