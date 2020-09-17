const checkWidth = () => {
    return document.documentElement.offsetWidth;
}
// header menu
(() => {
    let menuWrap = document.querySelector('.pagesWrap');
    let pagesMenu = document.querySelector('.pagesWrap .pagesMenu');
    let navigationWrap = document.querySelector('.header .navigation');
    let headerLink = document.querySelector('.header');
    let headerMenu = document.querySelector('.header .menu');
    let currentWidth = checkWidth();
    let currentState = 0;
    const movingMenu = () => {
        headerLink.after(menuWrap);
    };
    const returnMenu = () => {
        navigationWrap.append(menuWrap);
    }
    const buttonClick = () => {
        headerMenu.classList.add('active');
        menuWrap.classList.add('active');
    }
    const disableClick = () => {
        headerMenu.classList.remove('active');
        menuWrap.classList.remove('active');
    }
    const changeMainMenu = () => {
        let menuBtn = document.createElement('div');
        let menuTop = document.querySelector('.menuTop');
        menuBtn.classList.add('menuButtonWrap', 'blueGradient');
        headerMenu.append(menuBtn);
        for(let i = 0; i < 3; i++){
            let menuLine = document.createElement('span');
            menuLine.classList.add('menuLine');
            menuBtn.append(menuLine);
        }
        menuTop.append(menuBtn.cloneNode(true));
        menuBtn.onclick = buttonClick;
        menuTop.querySelector('.menuButtonWrap').onclick = disableClick;
    }
    const returnMainMenu = () => {
        let menuBtn = document.querySelector('.header .menuButtonWrap');
        if(menuBtn){
            menuBtn.remove();
        }
    }
    const createAdditionalMenu = () => {
        let menuTop = document.createElement('div');
        let menuBottom = document.createElement('div');
        let search = document.querySelector('.pagesWrap .widgetSearch').cloneNode(true);
        let menuPhone = document.querySelector('.header .navigation .anchorsWrap a .phoneNumber').cloneNode(true);
        let line = document.createElement('div');
        let logo = document.querySelector('.header .logo1').cloneNode(true);
        menuTop.classList.add('menuTop');
        menuTop.append(logo);
        menuBottom.classList.add('menuBottom');
        pagesMenu.prepend(menuTop);
        pagesMenu.append(menuBottom);
        search.classList.remove('blueGradient');
        line.classList.add('line');
        menuBottom.append(search);
        menuBottom.append(line);
        menuBottom.append(menuPhone);
        changeMainMenu();
    }
    const removeAdditionalMenu = () => {
        let menuBottom = document.querySelector('.menuBottom');
        let topMenu = document.querySelector('.menuTop');
        if(menuBottom && topMenu){
            menuBottom.remove();
            topMenu.remove();
            returnMainMenu();
        }
    }
    const menuCheck = (w) => {
        if (w < 992) {
            if (currentState == 0) {
                menuWrap.classList.add('mobile');
                movingMenu();
                createAdditionalMenu();
            }
            currentState = 1;
        } else {
            menuWrap.classList.remove('mobile');
            returnMenu();
            removeAdditionalMenu();
            currentState = 0;
        }
    }
    menuCheck(currentWidth);
    
    window.addEventListener('resize', function(){
        currentWidth = checkWidth();
        menuCheck(currentWidth);
    });
})();
// footer
(() => {
    let footerItems = document.querySelectorAll('.footer .footerItem');
    let footerHeading = document.querySelectorAll('.footer .footerItem h3');
    let footerItemsHeight = [];
    currentWidth = checkWidth();
    footerState = 0;
    const footerChange = () => {
        footerItems.forEach((el, index) => {
            el.querySelector('h3').setAttribute('data-heading', index + 1);
            el.querySelector('.links').setAttribute('data-content', index + 1);
            footerItemsHeight.push(el.querySelector('.links').offsetHeight);
            el.querySelector('.links').classList.add('hide');
            el.querySelector('.links').style.height = 0;
        });
    }

    const showMenu = (current) => {
        footerItems.forEach((el, index) => {
            el.classList.remove('active');
            if((index + 1) == current){
                el.classList.add('active');
                if(el.querySelector('.links').classList.contains('hide')){
                    el.querySelector('.links').classList.remove('hide');
                    el.querySelector('.links').style.height = footerItemsHeight[current - 1] + 'px';
                } else{
                    el.querySelector('.links').classList.add('hide');
                    el.querySelector('.links').style.height = 0;
                    el.classList.remove('active');
                }
            }
        });
    }

    footerHeading.forEach((el) => {
        el.onclick = () => {
            showMenu(el.dataset.heading);
        };
    });

    const footerCheck = (w) => {
        if(w < 768){
            if(footerState == 0){
                footerChange();
            }
            footerState = 1;
        } else{
            footerState = 0;
        }
    }
    footerCheck(currentWidth);

    window.addEventListener('resize', function(){
        currentWidth = checkWidth();
        footerCheck(currentWidth);
    })
})();
// custom slider
const initSlider = (section, maxWidth, dots, dotsType) => {
    if(document.querySelector(`${section}`) && dots == true){
        currentWidth = checkWidth();
        let sliderState = 0;
        const slider = () => {
            let sliderArea = document.querySelector(`${section} .customSlider`);
            let sliderItems = document.querySelectorAll(`${section} .customSlider .item`);
            let dotsArea = document.createElement('div');
            if(dotsType == 'whiteDots'){
                dotsArea.classList.add('dots', 'whiteDots');
            } else if(dotsType == 'greyDots'){
                dotsArea.classList.add('dots', 'greyDots');
            }
            sliderArea.append(dotsArea);

            sliderItems.forEach((el, index) => {
                el.classList.add('customSliderItem');
                el.classList.remove('active');
                el.setAttribute('data-slide', index + 1);
                let dot = document.createElement('div');
                if(index == 0){
                    el.classList.add('active');
                    dot.classList.add('active');
                }
                dot.classList.add('dot');
                dot.setAttribute('data-dot', index + 1);
                dotsArea.append(dot);
            });
            let dots = document.querySelectorAll(`${section} .customSlider .dots .dot`);

            const changeDot = (num) => {
                dots.forEach((el) => {
                    el.classList.remove('active');
                    if(el.dataset.dot == num){
                        el.classList.add('active');
                    }
                });
            }

            const changeSlide = (num) => {
                sliderItems.forEach((el) => {
                    el.classList.remove('active');
                    if(el.dataset.slide == num){
                        el.classList.add('active');
                    }
                });
            }

            dots.forEach((el) => {
                el.onclick = () => {
                    changeSlide(el.dataset.dot);
                    changeDot(el.dataset.dot);
                }
            });

            const currentSlide = () => {
                current = 1;
                sliderItems.forEach((el) => {
                    if(el.classList.contains('active')){
                        current = el.dataset.slide;
                    }
                });
                return +current;
            }

            sliderItems.forEach((el) => {
                el.addEventListener('touchstart', handleTouchStart, false)
            });
            sliderItems.forEach((el) => {
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
                let currentItem = currentSlide();
                if(! xDown || ! yDown){
                    return;
                }

                let xUp = evt.touches[0].clientX;                                    
                let yUp = evt.touches[0].clientY;

                let xDiff = xDown - xUp;
                let yDiff = yDown - yUp;

                if(Math.abs(xDiff) > Math.abs(yDiff)){
                    if(xDiff > 0){
                        // left
                        if(currentItem == sliderItems.length){
                            currentItem = 0;
                        }
                        changeSlide(currentItem + 1);
                        changeDot(currentItem + 1);
                    } else{
                        /* right swipe */
                        if(currentItem == 1){
                            currentItem = sliderItems.length + 1;
                        }
                        changeSlide(currentItem - 1);
                        changeDot(currentItem - 1);
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
        const sliderReset = () => {
            if(document.querySelector(`${section} .customSlider .dots`)){
                document.querySelector(`${section} .customSlider .dots`).remove();
            }
            document.querySelectorAll(`${section} .customSlider .item`).forEach((el) => {
                el.classList.remove('customSliderItem');
            });
        }
        const windowWidth = (w) => {
            if(w < maxWidth){
                if(sliderState == 0){
                    slider();
                }
                sliderState = 1;
            } else {
                sliderReset();
                sliderState = 0;
            }
        }
        windowWidth(currentWidth);

        window.addEventListener('resize', function(){
            currentWidth = checkWidth();
            windowWidth(currentWidth);
        });
    } else if(document.querySelector(`${section}`) && dots == false){
        currentWidth = checkWidth();
        let sliderState = 0;
        const slider = () => {
            let sliderArea = document.querySelector(`${section} .customSlider`);
            let sliderItems = document.querySelectorAll(`${section} .customSlider .item`);

            sliderItems.forEach((el, index) => {
                el.classList.add('customSliderItem');
                el.classList.remove('active');
                el.setAttribute('data-slide', index + 1);
                if(index == 0){
                    el.classList.add('active');
                }
            });

            const changeSlide = (num) => {
                sliderItems.forEach((el) => {
                    el.classList.remove('active');
                    if(el.dataset.slide == num){
                        el.classList.add('active');
                    }
                });
            }

            const currentSlide = () => {
                current = 1;
                sliderItems.forEach((el) => {
                    if(el.classList.contains('active')){
                        current = el.dataset.slide;
                    }
                });
                return +current;
            }

            sliderItems.forEach((el) => {
                el.addEventListener('touchstart', handleTouchStart, false)
            });
            sliderItems.forEach((el) => {
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
                let currentItem = currentSlide();
                if(! xDown || ! yDown){
                    return;
                }

                let xUp = evt.touches[0].clientX;                                    
                let yUp = evt.touches[0].clientY;

                let xDiff = xDown - xUp;
                let yDiff = yDown - yUp;

                if(Math.abs(xDiff) > Math.abs(yDiff)){
                    if(xDiff > 0){
                        // left
                        if(currentItem == sliderItems.length){
                            currentItem = 0;
                        }
                        changeSlide(currentItem + 1);
                    } else{
                        /* right swipe */
                        if(currentItem == 1){
                            currentItem = sliderItems.length + 1;
                        }
                        changeSlide(currentItem - 1);
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

        const sliderReset = () => {
            document.querySelectorAll(`${section} .customSlider .item`).forEach((el) => {
                el.classList.remove('customSliderItem');
                el.removeAttribute('data-slide');
            });
        }

        const windowWidth = (w) => {
            if(w < maxWidth){
                if(sliderState == 0){
                    slider();
                }
                sliderState = 1;
            } else {
                sliderReset();
                sliderState = 0;
            }
        }
        windowWidth(currentWidth);

        window.addEventListener('resize', function(){
            currentWidth = checkWidth();
            windowWidth(currentWidth);
        });
    }
}
// open modal
(() => {
    if(document.querySelector('.modal')){
        let modal = document.querySelector('.modal');
        let modalBtns = document.querySelectorAll('a.modalOpen');
        let modalContents = modal.querySelectorAll('.modalContent');

        const closeModal = (item) => {
            if(item.classList.contains('modalClose') || item.classList.contains('modal')){
                modal.classList.remove('active');
                document.body.classList.remove('modalActive');
            }
        }

        const showModalContent = (num) => {
            let modalClose = modal.querySelector('span.modalClose');
            modal.classList.add('active');
            modalContents.forEach((el) => {
                el.style.height = 0;
                el.style.opacity = 0;
                el.style.zIndex = -2;
                if(el.dataset.modalContent == num){
                    el.style.height = "100%";
                    el.style.opacity = 1;
                    el.style.zIndex = 1;
                }
            });
            modal.onclick = (e) => {
                closeModal(e.target);
            }
        }

        modalBtns.forEach((el) => {
            el.onclick = (e) => {
                e.preventDefault();
                showModalContent(el.dataset.modalButton);
                document.body.classList.add('modalActive');
            }
        });
    }
})();