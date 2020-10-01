// ACTIVE BLOCK
(() => {
    let links = document.querySelectorAll('.header .menu-item a');
    let sections = document.querySelectorAll('section');
    let currentSections = [];
    let current = 0;

    let neededBLocks = (id) => {
        sections.forEach((el) => {
            if(`#${el.id}` == id){
                currentSections.push(el);
            }
        });
    }

    let showBlock = () => {
        currentSections.forEach((el) => {
            if(window.pageYOffset >= el.offsetTop && window.pageYOffset <= el.offsetTop + el.offsetHeight){
                current = el;
            }
        })
        links.forEach((item) => {
            if(item.hash == `#${current.id}`){
                item.style = 'font-weight: 800; text-transform: uppercase;';
            } else {
                item.style = '';
            }
        })
    }
    showBlock();

    links.forEach((el) => {
        neededBLocks(el.hash);
    });

    window.onscroll = () => {
        showBlock();
    }
})();
// SHOW HEADER
(() => {
    let = checkWidth = () => {
        if(document.documentElement.offsetWidth <= 992){
            let header = document.querySelector('#header');
            let menuButton = header.querySelector('.menuButton');
            let menuItems = header.querySelectorAll('.menuWrap .navigation .menu-item a');            

            menuItems.forEach((el) => {
                el.onclick = () => {
                    header.classList.remove('active');
                }
            });

            menuButton.onclick = () => {
                if(header.classList.contains('active')){
                    header.classList.remove('active');
                } else{
                    header.classList.add('active');
                }
            }
        }
    }
    checkWidth();

    window.onresize = checkWidth;
})();
// SCROLL MENU
(() => {
    let menu = document.querySelector('#header');

    let changeColor = () => {
        if(window.pageYOffset >= document.documentElement.clientHeight){
            menu.classList.add('fixed');
        } else{
            menu.classList.remove('fixed');
        }
    }
    changeColor();

    window.addEventListener('scroll', changeColor);
})();
let timerTime = 5000;
// SLIDER 1
(() => {
    let sliderItems = document.querySelectorAll('.section2 .customSlider .item');
    let sliderArea = document.querySelector('.section2 .customSlider');
    
    for(let i = 0; i < sliderItems.length; i++){
        if(i == 0){
            sliderItems[i].classList.add('active');
        }
        sliderItems[i].setAttribute('data-slide', i + 1);
    }
    
    let createDots = () => {
        let dots = document.createElement('div');
        dots.classList.add('dots');
        sliderArea.append(dots);
    }
    createDots();
    let dotsArea = sliderArea.querySelector('.dots');

    let dotsCount = () => {
        for(let i = 0; i < sliderItems.length; i++){
            let dot = document.createElement('div');
            dot.setAttribute('data-dot', i + 1);
            if(i == 0){
                dot.classList.add('active');
            }
            dot.classList.add('dot');
            dotsArea.append(dot);
        }
    }
    dotsCount();
    let dots = dotsArea.querySelectorAll('.dot');

    dots.forEach((el) => {
        el.onclick = () => {
            changeDot(el.dataset.dot);
        }
    })

    let changeDot = (dot) => {
        dots.forEach((el) => {
            el.classList.remove('active');
            if(dot == el.dataset.dot){
                el.classList.add('active');
            }
        });
        changeSlide(dot)
    }

    let changeSlide = (slideNum) => {
        sliderItems.forEach((el) => {
            el.classList.remove('active');
            if(el.dataset.slide == slideNum){
                el.classList.add('active');
            }
        });
    }

    let getCurrent = () => {
        let current = 1;
        sliderItems.forEach((el) => {
            if(el.classList.contains('active')){
                current = el.dataset.slide;
            }
        });
        return +current;
    }

    let next = () => {
        let currentSlide = getCurrent() + 1;
        if(currentSlide > sliderItems.length){
            currentSlide = 1;
        }
        changeDot(currentSlide);
        clearInterval(timerStart);
        timerStart = setInterval(timer, timerTime);
    }

    let timer = () => {
        next();
    }
    let timerStart = setInterval(timer, timerTime);
})();
// SLIDER 2
(() => {
    let sliderItems = document.querySelectorAll('.section4 .customSliderArea .sliderItem');
    let sliderArea = document.querySelector('.section4 .customSliderArea');
    
    for(let i = 0; i < sliderItems.length; i++){
        if(i == 0){
            sliderItems[i].classList.add('active');
        }
        sliderItems[i].setAttribute('data-slide', i + 1);
    }

    let createDots = () => {
        let dotsArea = document.createElement('div');
        dotsArea.classList.add('dots');
        sliderArea.append(dotsArea);
    }
    createDots();
    let dotsArea = sliderArea.querySelector('.dots');
    let dotsCount = () => {
        for(let i = 0; i < sliderItems.length; i++){
            let dot = document.createElement('div');
            if(i == 0){
                dot.classList.add('active');
            }
            dot.classList.add('dot');
            dot.setAttribute('data-dot', i + 1);
            dotsArea.append(dot)
        }
    }
    dotsCount();
    let dots = dotsArea.querySelectorAll('.dot');

    dots.forEach((el) => {
        el.onclick = () => {
            changeDot(el.dataset.dot);
        }
    })

    let changeDot = (dotNum) => {
        dots.forEach((el) => {
            el.classList.remove('active');
            if(el.dataset.dot == dotNum){
                el.classList.add('active');
            }
        });
        changeSlide(dotNum);
    }

    let changeSlide = (slideNum) => {
        sliderItems.forEach((el) => {
            el.classList.remove('active');
            if(el.dataset.slide == slideNum){
                el.classList.add('active')
            }
        });
    }

    let currentSlide = () => {
        let current = 1;
        sliderItems.forEach((el) => {
            if(el.classList.contains('active')){
                current = el.dataset.slide;
            }
        });
        return current;
    }

    let next = () => {
        let current = +currentSlide() + 1;
        if(current > sliderItems.length){
            current = 1;
        }
        changeSlide(current);
        changeDot(current)
    }

    let timer = () => {
        next();
    }
    let timerStart = setInterval(timer, timerTime);
})();
// MODAL WINDOW
(() => {
    let modal = document.querySelector('#modal');
    let closeButton = modal.querySelector('span.close');
    let modalContent = document.querySelectorAll('#modal .modalContent');
    let modalButtons = document.querySelectorAll('.modalButton');

    for(let i = 0; i < modalContent.length; i++){
        modalContent[i].setAttribute('data-modal', i + 1);
    }

    let openModal = (num) => {
        console.log(num)
        modal.classList.add('active');
        document.querySelector('body').classList.add('modal');
        modalContent.forEach((el) => {
            if(el.dataset.modal == num){
                el.classList.add('active');
            }
        });
    }

    let closeModal = () => {
        modal.classList.remove('active');
        document.querySelector('body').classList.remove('modal');
    }

    closeButton.onclick = () => {
        closeModal();
    }

    modalButtons.forEach((el) => {
        el.onclick = () => {
            openModal(el.dataset.modalButton);
        }
    })

})();
// INST
(() => {
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