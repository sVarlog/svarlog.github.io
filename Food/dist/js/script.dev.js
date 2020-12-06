"use strict";

var _sliderMin = require("./modules/slider.min.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var clientWidth = document.documentElement.offsetWidth,
    menuStatus = 0; // create menu

var menuInit = function menuInit() {
  var header = document.querySelector('.header'),
      menu = header.querySelector('.header .menu'),
      btn = header.querySelector('.header button.open-modal'),
      logo = header.querySelector('.header .logo'),
      btnClone = btn.cloneNode(true),
      menuClone = menu.cloneNode(true);
  var menuWrapp,
      menuBtn,
      menuSpan,
      menuActiveStatus = 0;

  var menuActive = function menuActive() {
    menuWrapp = document.createElement('div');
    menuBtn = document.createElement('div');
    menuSpan = document.createElement('span');
    menuBtn.classList.add('menuBtn');
    menuWrapp.classList.add('mobileMenuWrapp');
    menuBtn.append(menuSpan);
    menuWrapp.append(menuClone, btnClone);
    menu.remove();
    btn.remove();
    header.append(menuBtn);
    header.append(menuWrapp);

    var transformMenu = function transformMenu() {
      if (menuActiveStatus == 0) {
        menuWrapp.classList.add('active');
        menuBtn.classList.add('active');
        logo.style.width = '0';
        logo.style.transform = 'translateX(-140px)';
        menuActiveStatus = 1;
      } else {
        menuWrapp.classList.remove('active');
        menuBtn.classList.remove('active');
        logo.style.width = '70px';
        logo.style.transform = 'translateX(0)';
        menuActiveStatus = 0;
      }
    };

    menuBtn.addEventListener('click', transformMenu);
  };

  var menuRemove = function menuRemove() {
    header.querySelector('.menuBtn').remove();
    header.querySelector('.mobileMenuWrapp').remove();
    header.append(menuClone);
    header.append(btnClone);
    console.log('test');
  };

  if (clientWidth < 576) {
    console.log(clientWidth);

    if (menuStatus == 0) {
      menuActive();
      menuStatus = 1;
    }
  } else {
    if (menuStatus == 1) {
      menuRemove();
      menuStatus = 0;
    }
  }
}; // create modals


var modalInit = function modalInit() {
  var modal = document.querySelector('.modal'),
      modalBtns = document.querySelectorAll('.open-modal');

  var showModal = function showModal(arg) {
    modal.classList.add('active');
    document.body.classList.add('modalActive');
    window.addEventListener('click', hideModal);
    window.addEventListener('keydown', hideModal);
  };

  var hideModal = function hideModal(e) {
    if (e.target.classList.contains("modalClose") || e.target.classList.contains("modal") || e.code == "Escape") {
      modal.classList.remove('active');
      document.body.classList.remove('modalActive');
      window.removeEventListener('click', hideModal);
      window.removeEventListener('keydown', hideModal);
    }
  };

  modalBtns.forEach(function (el) {
    return el.addEventListener('click', showModal);
  });

  var showModalWithScroll = function showModalWithScroll() {
    if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
      showModal();
      window.removeEventListener('scroll', showModalWithScroll);
    }
  };

  window.addEventListener('scroll', showModalWithScroll);
}; // tabs


var tabs = function tabs() {
  var tabs = document.querySelector('.tabs'),
      tabsContent = tabs.querySelectorAll('.tabContent'),
      tabsDescr = tabs.querySelectorAll('.tabDescr .descr'),
      navItems = tabs.querySelectorAll('.tabsNavigation .navItem');

  var showContent = function showContent(num) {
    tabsContent.forEach(function (el, i) {
      el.classList.remove('active');

      if (i == num) {
        el.classList.add('active');
      }
    });
    tabsDescr.forEach(function (el, i) {
      el.classList.remove('active');

      if (i == num) {
        el.classList.add('active');
      }
    });
    navItems.forEach(function (el, i) {
      el.classList.remove('active');

      if (i == num) {
        el.classList.add('active');
      }
    });
  };

  showContent(0);
  navItems.forEach(function (el, i) {
    el.setAttribute('data-num', i);
    el.addEventListener('click', function () {
      showContent(el.dataset.num);
    });
  });
}; // slider


var slider = function slider() {
  (0, _sliderMin.initCustomSlider)({
    section: '.section2 .customSlider',
    arrows: true,
    dots: true
  });
}; // calculator


var calculator = function calculator() {
  var calcBlock = document.querySelector('.section3 .calc'),
      gender = calcBlock.querySelectorAll('.gender .calcItem'),
      weight = calcBlock.querySelector('.stats .weight'),
      height = calcBlock.querySelector('.stats .height'),
      age = calcBlock.querySelector('.stats .age'),
      activity = calcBlock.querySelectorAll('.activity .calcItem'),
      total = calcBlock.querySelector('.resultBlock .number');
  var data = {
    gender: 'female',
    height: '',
    weight: '',
    age: '',
    activity: '1.375'
  };

  var calculating = function calculating() {
    var expression;

    if (data.gender == 'male') {
      expression = ((88.36 + 13.4 * data.weight + 4.8 * data.height - 5.7 * data.age) * data.activity).toFixed(0);
    } else if (data.gender == 'female') {
      expression = ((447.6 + 9.2 * data.weight + 3.1 * data.height - 4.3 * data.age) * data.activity).toFixed(0);
    }

    total.innerHTML = expression;
  };

  var check = function check() {
    if (data.gender && data.height && data.weight && data.age && data.activity) {
      calculating();
    }
  };

  var changeActive = function changeActive(item, items, name) {
    items.forEach(function (el) {
      el.classList.remove('active');
    });
    item.classList.add('active');
    data[name] = item.dataset[name];
    check();
  };

  gender.forEach(function (el) {
    el.addEventListener('click', function () {
      changeActive(el, gender, 'gender');
    });
  });
  activity.forEach(function (el) {
    el.addEventListener('click', function () {
      changeActive(el, activity, 'activity');
    });
  });

  var inputChange = function inputChange() {
    for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    nums.forEach(function (el) {
      el.addEventListener('input', function () {
        el.value = el.value.replace(/\D/g, '');

        if (el.value > 300) {
          el.value = 299;
        }

        data[el.getAttribute('name')] = el.value;
        check();
      });
    });
  };

  inputChange(height, weight, age);
}; // cards


var cards = function cards() {
  var cardsWrap = document.querySelector('.section4 .cards .row');
  var cardsData = [{
    img: "img/tabs/vegy.jpg",
    heading: "Меню 'Фитнес'",
    content: "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    price: 256
  }, {
    img: "img/tabs/post.jpg",
    heading: "Меню 'Постное'",
    content: "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    price: 450
  }, {
    img: "img/tabs/elite.jpg",
    heading: "Меню 'Премиум'",
    content: "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    price: 576
  }];

  var render = function render(item) {
    var cardItem = document.createElement('div'),
        cardHead = document.createElement('div'),
        cardBody = document.createElement('div'),
        cardFooter = document.createElement('div'),
        img = document.createElement('img'),
        title = document.createElement('h3'),
        p = document.createElement('p'),
        p2 = document.createElement('p'),
        p3 = document.createElement('p');
    cardItem.classList.add('cardItem');
    cardHead.classList.add('cardHead');
    cardBody.classList.add('cardBody');
    cardFooter.classList.add('cardFooter');
    img.src = item.img;
    title.innerText = item.heading;
    cardHead.append(img);
    cardBody.append(title);
    p.innerText = item.content;
    cardBody.append(p);
    p2.innerText = 'Цена:';
    cardFooter.append(p2);
    p3.innerHTML = "<span class=\"price\">".concat(item.price, "</span> \u0433\u0440\u043D/\u0434\u0435\u043D\u044C");
    cardFooter.append(p3);
    cardItem.append(cardHead, cardBody, cardFooter);
    cardsWrap.append(cardItem);
  };

  cardsData.forEach(function (el) {
    render(el);
  });
}; // timer


var time = '2020-11-21';

var timer = function timer() {
  var timerWrapp = document.querySelector('.stock .timer'),
      days = timerWrapp.querySelector('.timeVal .days'),
      hours = timerWrapp.querySelector('.timeVal .hours'),
      minutes = timerWrapp.querySelector('.timeVal .minutes'),
      seconds = timerWrapp.querySelector('.timeVal .seconds');
  var day = new Date(time);

  if (day - new Date() < 8.64e+8) {
    while (day - new Date() < 8.64e+8) {
      day.setDate(day.getDate() + 10);
    }
  }

  var getTimeRemaning = function getTimeRemaning(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor(time / (1000 * 60 * 60) % 24),
        minutes = Math.floor(time / 1000 / 60 % 60),
        seconds = Math.floor(time / 1000 % 60);
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var updateClock = function updateClock() {
    var time = getTimeRemaning(day);

    for (var t in time) {
      if (time[t] < 10) {
        time[t] = "0".concat(time[t]);
      }
    }

    days.innerText = time.days;
    hours.innerText = time.hours;
    minutes.innerText = time.minutes;
    seconds.innerText = time.seconds;
  };

  updateClock();
  setInterval(updateClock, 1000);
}; // animation


var animation = function animation() {
  var elems = document.querySelectorAll('.anim');
  elems.forEach(function (el) {
    return el.setAttribute('data-hide', 0);
  });

  var hide = function hide(item) {
    var dir;

    if (item.classList.contains('animLeft')) {
      dir = "translateX(-100vw)";
    } else if (item.classList.contains('animRight')) {
      dir = "translateX(100vw)";
    }

    new Promise(function (resolve, reject) {
      item.style.transition = '0s';
      resolve(item);
    }).then(item.style.transform = dir).then(setTimeout(function () {
      item.style.transition = '.75s';
      item.dataset.hide = 1;
    }, 750));
  };

  var show = function show(item) {
    item.style.transform = 'translateX(0)';
  };

  var properties = function properties() {
    elems.forEach(function (el) {
      if (el.dataset.hide == 0) {
        hide(el);
      }

      if (window.pageYOffset + document.documentElement.clientHeight > el.offsetTop && window.pageYOffset < el.offsetTop + el.offsetHeight) {
        if (el.dataset.hide == 0) {
          setTimeout(function () {
            show(el);
          }, 751);
        } else {
          show(el);
        }
      }
    });
  };

  properties();
  window.addEventListener('scroll', properties);
  window.addEventListener('resize', properties);
};

var render = function render(_ref) {
  var _ref2 = _toArray(_ref),
      func = _ref2.slice(0);

  func.forEach(function (f) {
    return f();
  });
};

render([menuInit, modalInit, tabs, slider, calculator, cards, timer, animation]);
window.addEventListener('resize', function () {
  clientWidth = document.documentElement.clientWidth;
  render([menuInit]);
});