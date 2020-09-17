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
// header slider
(() => {
    const sliderStart = () => {
        let currentWidth = checkWidth();
        let currentState = 0;
        let timerTime = 7000;
        let header = document.querySelector('.header');

        const initSlider = () => {
            let sliderArea = document.querySelector('.header .gradient .content');
            let sliderItems = sliderArea.querySelectorAll('.item');
            let prevArrows = sliderArea.querySelectorAll('.arrows .prev');
            let nextArrows = sliderArea.querySelectorAll('.arrows .next');

            const pause = (el) => {
                el.addEventListener('mouseup', function(){
                    clearInterval(timerID, timerTime);
                    timerID = setInterval(timer, timerTime);
                });
                el.addEventListener('touchend', function(){
                    clearInterval(timerID, timerTime);
                    timerID = setInterval(timer, timerTime);
                });
            }

            sliderItems.forEach((el, index) => {
                el.setAttribute('data-slide', index + 1);
                el.classList.remove('active');
                el.style.transition = '2s';
                if(index == 0){
                    el.classList.add('active');
                }
                el.addEventListener('mousedown', function(){
                    pause(el);
                });
                el.addEventListener('touchstart', function(){
                    pause(el);
                });
            });

            const currentSlide = () => {
                current = 1;
                sliderItems.forEach((el) => {
                    if(el.classList.contains('active')){
                        current = el;
                    }
                });
                return current;
            }

            const bgPosChange = () => {
                current = currentSlide();
                header.style.transition = '2s';
                if(current.classList.contains('left')){
                    header.style.backgroundPositionX = '60%';
                } else if(current.classList.contains('right')){
                    header.style.backgroundPositionX = '40%';
                }
            }
            bgPosChange();

            const changeSlide = (current) => {
                sliderItems.forEach((el) => {
                    el.classList.remove('active');
                    if(el.dataset.slide == current){
                        el.classList.add('active');
                    }
                });
                bgPosChange();
            }

            prevArrows.forEach((el) => {
                el.onclick = () => {
                    let current = +currentSlide().dataset.slide - 1;
                    if(current < 1){
                        current = sliderItems.length;
                    }
                    changeSlide(current);
                    clearInterval(timerID);
                    timerID = setInterval(timer, timerTime);
                }
            });

            nextArrows.forEach((el) => {
                el.onclick = () => {
                    let current = +currentSlide().dataset.slide + 1;
                    if(current > sliderItems.length){
                        current = 1;
                    }
                    changeSlide(current);
                    clearInterval(timerID);
                    timerID = setInterval(timer, timerTime);
                }
            });

            let timerID = setInterval(timer, timerTime);
            function timer(){
                let current = +currentSlide().dataset.slide + 1;
                if(current > sliderItems.length){
                    current = 1;
                }
                changeSlide(current);
            }
        }

        const removeSlider = () => {
            header.style.backgroundPositionX = 'center';
            clearInterval(timerID);
        }

        const windowWidth = (windowWidth) => {
            if(windowWidth < 576){
                if(currentState == 0){
                    initSlider();
                }
                currentState = 1;
            } else {
                if(currentState == 1){
                    removeSlider();
                }
                currentState = 0;
            }
        }
        windowWidth(currentWidth);

        window.addEventListener('resize', function(){
            currentWidth = checkWidth();
            windowWidth(currentWidth);
        });
    }

    window.addEventListener('load', sliderStart);
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
// recomendation mobile heading
(() => {
    const productWrap = document.querySelector('.recomendation .products');
    let currentWidth = checkWidth();
    let recState = 0;
    const addHeading = (w) => {
        if(w < 768){
            if(recState == 0){
                let heading = document.createElement('h3');
                heading.classList.add('text-uppercase');
                heading.innerHTML = 'Лучшие <span class="blueText">товары</span>';
                productWrap.prepend(heading)
            }
            recState = 1;
        } else{
            if(document.querySelector('.recomendation .products h3')){
                document.querySelector('.recomendation .products h3').remove();
            }
            recState = 0;
        }
    }
    addHeading(currentWidth);

    window.addEventListener('resize', function(){
        currentWidth = checkWidth();
        addHeading(currentWidth);
    })
})();
// init custom slider
initSlider('.recomendation', 768, true, 'greyDots');
initSlider('.howWeWork', 992, true, 'greyDots');
initSlider('.reviews1', 768, true, 'greyDots');
initSlider('.procedures', 768, false);