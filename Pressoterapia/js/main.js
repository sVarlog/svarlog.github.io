// header phones
(function(){
    let phones = document.querySelector('#phones');
    let section = document.querySelector('section.contacts');

    function fixPhones(){
        if(window.pageYOffset >= document.documentElement.clientHeight && window.pageYOffset <= section.offsetTop){
            phones.style = 'opacity: 1; z-index: 2;'
        } else {
            phones.style = 'opacity: 0; z-index: -1;'
        }
    }
    fixPhones();
    window.addEventListener('scroll', fixPhones);
})();
// menu show + section translate
(function(){
    // menu show
    let menu = document.querySelector('.header .menu');
    let navigation = document.querySelector('.header .menu .navigation');
    let menuBtn = document.querySelector('.header .menu .menuButtonMob');
    let closeBtn = document.querySelector('.header .menu .menu-item.buttonCloseMob');

    function showMenu(){
        navigation.style = 'transition: .5s; transform: translateX(0)';
    }

    function hideMenu(){
        navigation.style = 'transition: .5s; transform: translateX(100%)';
    }

    function checkWidthMenu(){
        if(document.documentElement.clientWidth < 992){
            navigation.classList.add('active');
            menuBtn.addEventListener('click', function(){
                showMenu();
            });
            closeBtn.addEventListener('click', function(e){
                e.preventDefault();
                hideMenu();
            })
        } else {
            navigation.classList.remove('active');
        }
    }
    checkWidthMenu();

    window.addEventListener('resize', checkWidthMenu);

    // scroll animate
    let link = document.querySelectorAll('.header .menu .navigation li.menu-item a');

    link.forEach(function(el){
        el.addEventListener('click', function(e){
            e.preventDefault();
            let id = el.getAttribute('href');
            let top = document.querySelector(`${id}`).offsetTop;
            window.scrollTo({top: top, behavior: 'smooth'});
            if(document.documentElement.clientWidth <= 992){
                hideMenu();
            }
        });
    });

    // sections translate
    let switchBtn = document.querySelectorAll('#switcher .switchItem');
    let switcherElem = document.querySelector('#switcher');
    let switchItems = document.querySelectorAll('section.airSlim');
    let blockHeight = document.querySelector('.section1');
    let menuBtns = menu.querySelectorAll('a.switchItem');

    function checkWidth(){
        if(document.documentElement.clientWidth <= 767){
            switcher();
            checkScroll();
        }
    }
    checkWidth();

    function checkScroll(){
        if(window.pageYOffset >= document.documentElement.clientHeight + 50){
            if(window.pageYOffset >= blockHeight.offsetHeight + 500){
                switcherElem.style = 'opacity: 0; z-index: -1;';
            }
            else {
                switcherElem.style = 'opacity: 1; z-index: 3; position: fixed';
            }
        } else{
            switcherElem.style = 'position: relative';
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkWidth);

    function switcher(){
        for(let i = 0; i < switchBtn.length; i++){
            switchBtn[i].setAttribute('data-switch', i + 1);
            menuBtns[i].setAttribute('data-switch', i + 1);
            if(switchBtn[i].dataset.switch == 1){
                switchBtn[i].classList.add('active');
            }
            switchItems[i].setAttribute('data-container', i + 1);
            if(switchItems[i].dataset.container == 1){
                switchItems[i].classList.add('active');
            }
            if(switchItems[i].dataset.container == 2){
                switchItems[i].style.transform = 'translateX(-100%)';
            }
        }

        function changeCurrentItem(item){
            switchItems.forEach(function(el){
                el.classList.remove('active');
                if(el.dataset.container == item){
                    el.classList.add('active');
                }
                if(item == 1){
                    if (el.dataset.container == 1) {
                        el.style.transform = 'translateX(0)'
                    }
                    if(el.dataset.container == 2){
                        el.style.transform = 'translateX(-100%)'
                    }
                } else if(item == 2){
                    if (el.dataset.container == 1) {
                        el.style.transform = 'translateX(100%)'
                    }
                    if (el.dataset.container == 2) {
                        el.style.transform = 'translateX(0)'
                    }
                }
            });
        }

        function changeCurrentBtn(item){
            if(!item.classList.contains('left') && !item.classList.contains('right')){
                switchBtn.forEach(function (el){
                    el.classList.remove('active');
                    if(el.dataset.switch == item.dataset.switch){
                        el.classList.add('active');
                    }
                });
                changeCurrentItem(item.dataset.switch);
                let id1 = item.getAttribute('href');
                let top1 = document.querySelector(`${id1}`).offsetTop;
                window.scrollTo({top: top1, behavior: 'smooth'});
                hideMenu();
            } else {
                switchBtn.forEach(function (el){
                    el.classList.remove('active');
                });
                item.classList.add('active');
                changeCurrentItem(item.dataset.switch);
            }
        }

        window.onload = function(){
            if(window.location.hash === '#section1'){
                changeCurrentBtn(switchBtn[0]);
            } else if(window.location.hash === '#section2'){
                changeCurrentBtn(switchBtn[1]);
            }
        }

        switchBtn.forEach(function(el){
            el.addEventListener('click', function(){
                changeCurrentBtn(el);
            });
        });

        menuBtns.forEach(function(el){
            el.addEventListener('click', function(){
                changeCurrentBtn(el);
            });
        });
    }
})();
// section 1/2 init payback slider
function initCustomSlider(section){
    let sliderArea = document.querySelector(`${section} #customSliderArea`);
    let slideItems = document.querySelectorAll(`${section} .cardItem`);
    let dotsArea = document.createElement('div');
    dotsArea.classList.add('dotsArea');
    sliderArea.append(dotsArea);

    for (let i = 0; i < slideItems.length; i++) {
        slideItems[i].setAttribute('data-slide-number', i + 1);
        if (slideItems[i].dataset.slideNumber == 1) {
            slideItems[i].classList.add('active');
        }
        let dot = document.createElement('dot');
        dot.classList.add('dotItem');
        if (i == 0) {
            dot.classList.add('active');
        }
        dot.setAttribute('data-dot-number', i + 1);
        dotsArea.append(dot);
    }

    function dotChange(item){
        dotItems.forEach(function(el){
            el.classList.remove('active');
            if (el.dataset.dotNumber == item){
                el.classList.add('active');
            }
        });
    }

    function changeCurrentSlide(item){
        slideItems.forEach(function (el){
            el.classList.remove('active');
            if (el.dataset.slideNumber == item) {
                el.classList.add('active');
            }
        });
    }

    function activeSlide(){
        let currentItem = 1;
        slideItems.forEach(function(el){
            if(el.classList.contains('active')){
                currentItem = el.dataset.slideNumber;
            }
        });
        return Number(currentItem);
    }

    let dotItems = document.querySelectorAll(`${section} #customSliderArea .dotItem`);
    dotItems.forEach(function(el){
        el.addEventListener('click', function(){
            dotChange(el.dataset.dotNumber);
            changeCurrentSlide(el.dataset.dotNumber);
        });
    });

    slideItems.forEach(function(el){
        el.addEventListener('touchstart', handleTouchStart, false)
    });
    slideItems.forEach(function(el){
        el.addEventListener('touchmove', handleTouchMove, false)
    });

    let xDown = null;                                                        
    let yDown = null;

    function getTouches(evt){
        return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt){
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt){
        let currentItem = activeSlide();
        if(! xDown || ! yDown){
            return;
        }

        let xUp = evt.touches[0].clientX;                                    
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if(Math.abs(xDiff) > Math.abs(yDiff)){/*most significant*/
            if(xDiff > 0){
                // left
                if(currentItem == slideItems.length){
                    currentItem = 0;
                }
                changeCurrentSlide(currentItem + 1);
                dotChange(currentItem + 1)
            } else{
                /* right swipe */
                if(currentItem == 1){
                    currentItem = slideItems.length + 1;
                }
                changeCurrentSlide(currentItem - 1);
                dotChange(currentItem - 1)
                console.log(currentItem - 1);
            }                       
        } else{
            if(yDiff > 0){
                /* up swipe */ 
            } else{ 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                           
    };
}
initCustomSlider('.section1');
initCustomSlider('.section2');
initCustomSlider('.section5');
// inst animation
(function(){
    let bg = document.querySelector('section.inst');
    let phone = document.querySelector('section.inst #instPhone');
    let leaf1 = document.querySelector('section.inst #instLeaf1');
    let leaf2 = document.querySelector('section.inst #instLeaf2');
    let leaf3 = document.querySelector('section.inst #instLeaf3');
    let currentPosition1 = leaf1.offsetLeft;
    let currentPosition2 = leaf2.offsetLeft;
    let currentPosition3 = leaf3.offsetLeft;

    function animation(e) {
        const posY = e.clientY, posX = e.clientX;
        leaf1.style = `transition: .4s; left: ${currentPosition1 + (-posX/15)}px`;
        leaf2.style = `transition: .4s; left: ${currentPosition2 + (-posX/10)}px`;
        leaf3.style = `transition: .4s; left: ${currentPosition3 + (posX/25)}px`;
        phone.style = `transition: .1s; right: ${phone.offsetLeft + (posX/25)}px;`;
    }

    function checkWidth(){
        if(document.documentElement.clientWidth >= 992){
            bg.addEventListener('mousemove', animation);
        } else {
            return
        }
    }
    checkWidth();

    window.addEventListener('resize', checkWidth);
})();
// modal windows
(function(){
    let openButtons = document.querySelectorAll('a.modalButton');
    let modalWindow = document.querySelector('.modalWindow');
    let closeButton = modalWindow.querySelector('span.closeWindow');
    let modalContent = modalWindow.querySelectorAll('.modalContent');

    openButtons.forEach(function(el){
        el.addEventListener('click', function(e){
            e.preventDefault();
            modalWindow.style = "transition: .5s; opacity: 1; z-index: 10000;";
            showContent(el.dataset.modalButton);
        });
    });

    closeButton.addEventListener('click', function(){
        modalWindow.style = "transition: .5s; opacity: 0; z-index: -2;";
        modalContent.forEach(function(el){
            el.style = 'opacity: 0; z-index: -2';
        })
    });

    function showContent(num){
        modalContent.forEach(function(el){
            el.classList.remove('active');
            if(el.dataset.modalContent == num){
                el.classList.add('active');
                el.style = 'opacity: 1; z-index: 2;'
            }
        })
    }
})();
// Form validation
(function(){
	let forms = document.querySelectorAll('form');
	let inputs = [];
	let submitBtns = [];
	for(let i = 0; i < forms.length; i++){
	    inputs[i] = forms[i].querySelectorAll('input[data-rule="phone"]');
	    submitBtns[i] = forms[i].querySelectorAll('button[type="submit"]');

	    for (let input of inputs[i]) {
	        input.addEventListener('blur', function () {
	            let rule = this.dataset.rule;
	            let value = this.value;
	            let check;

	            switch (rule) {
	                case 'phone':
	                    check = /^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,12}$/.test(value);
	                    input.addEventListener('keyup', function(){
						    this.value = this.value.replace(/[^\d]/g, '');
						});
	                    let length = value.length;
	                    break;
	                default:
	                    break;
	            }

	            this.classList.remove('valid');
	            this.classList.remove('invalid');
	            if (check) {
	                this.classList.add('valid');
	                submitBtns[i].forEach(function (el) {
	                    el.removeAttribute('disabled');
	                });
	            } else {
	                this.classList.add('invalid');
	                submitBtns[i].forEach(function(el){
	                    el.setAttribute('disabled', true);
	                })
	            }
	        })
	    }
	}
})();