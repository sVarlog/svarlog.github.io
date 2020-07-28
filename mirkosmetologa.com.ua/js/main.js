const checkWidth = () => {
    return document.documentElement.offsetWidth;
}
// INST
(() => {
    if(document.querySelector('section.inst')){
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
            leaf1.style = `transition: .4s; left: ${currentPosition1 + (-posX / 15)}px`;
            leaf2.style = `transition: .4s; left: ${currentPosition2 + (-posX / 10)}px`;
            leaf3.style = `transition: .4s; left: ${currentPosition3 + (posX / 25)}px`;
            phone.style = `transition: .1s; right: ${phone.offsetLeft + (posX / 25)}px;`;
        }

        function checkWidth() {
            if (document.documentElement.clientWidth >= 992) {
                bg.addEventListener('mousemove', animation);
            } else {
                return
            }
        }
        checkWidth();

        window.addEventListener('resize', checkWidth);
    }
})();
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
// categories
(() => {
    window.onload = () => {
        let currentWidth = checkWidth();
        let catWrap = document.querySelector('.categories');
        let catContent = catWrap.querySelector('.catWrap');
        let categoriesState = 0;

        const changeCategories = () => {
            catWrap.classList.add('mobile');
            let catHeading = document.createElement('div');
            let catTitle = document.createElement('h3');
            let catButton = document.createElement('div');
            catButton.classList.add('catButton');
            catTitle.classList.add('blueText', 'text-uppercase');
            catTitle.innerHTML = 'Категории товаров';
            catHeading.classList.add('catHeading');
            catHeading.append(catTitle);
            catHeading.append(catButton);
            for (let i = 0; i < 3; i++) {
                let catButtonLine = document.createElement('span');
                catButtonLine.classList.add('catButtonLine');
                catButton.append(catButtonLine);
            }
            catWrap.prepend(catHeading);
            let catHeight = catContent.offsetHeight;
            catContent.style.height = 0;
            catButton.addEventListener('click', function () {
                showCategory(catHeight);
            });
        }

        const returnCategories = () => {
            catWrap.classList.remove('mobile');
            let catHeading = document.querySelector('.categories .catHeading');
            if(catHeading){
                catHeading.remove();
                catContent.style.height = 'auto';
            }
        }

        const showCategory = (catHeight) => {
            if (!catWrap.classList.contains('active')) {
                catWrap.classList.add('active');
                catContent.style.height = catHeight + 'px';
            } else {
                catWrap.classList.remove('active');
                catContent.style.height = 0;
            }
        }

        const catCheck = (w) => {
            if (w < 768) {
                if(categoriesState == 0){
                    changeCategories();
                }
                categoriesState = 1;
            } else {
                returnCategories();
                categoriesState = 0;
            }
        }
        catCheck(currentWidth);

        window.addEventListener('resize', function () {
            currentWidth = checkWidth();
            catCheck(currentWidth);
        });
    }
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
(() => {
    const initSlider = (section, maxWidth) => {
        if(document.querySelector(`${section}`)){
            currentWidth = checkWidth();
            let sliderState = 0;
            const slider = () => {
                let sliderArea = document.querySelector(`${section} .customSlider`);
                let sliderItems = document.querySelectorAll(`${section} .customSlider .customSliderItem`);

                sliderItems.forEach((el, index) => {
                    el.setAttribute('data-slide', index + 1);
                    if(index == 0){
                        el.classList.add('active');
                    }
                });
            }
            const sliderReset = () => {

            }
            const windowWidth = (w) => {
                if(w < maxWidth){
                    if(sliderState == 0){
                        slider();
                    }
                    sliderState = 1;
                } else {
                    sliderReset();
                    sliderSate = 0;
                }
            }
            windowWidth(currentWidth);

            window.addEventListener('resize', function(){
                currentWidth = checkWidth();
                windowWidth(currentWidth);
            });
        }
    }
    initSlider('.recomendation', 768);
})();