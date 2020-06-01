// section 1/2 translate current section
(function(){
    function checkWidth(){
        if(document.documentElement.clientWidth <= 768){
            switcher();
        }
    }
    checkWidth();

    window.addEventListener('resize', checkWidth);

    function switcher(){
        let switchBtn = document.querySelectorAll('#switcher .switchItem');
        let switchItems = document.querySelectorAll('section.airSlim');

        for(let i = 0; i < switchBtn.length; i++){
            switchBtn[i].setAttribute('data-switch', i + 1);
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
            switchBtn.forEach(function (el){
                el.classList.remove('active');
            });
            item.classList.add('active');
            changeCurrentItem(item.dataset.switch);
        }

        switchBtn.forEach(function(el){
            el.addEventListener('click', function(){
                changeCurrentBtn(el);
            });
        });
    }
})();
// section 1/2 init payback slider
function initCustomSlider(section){
    let sliderArea = document.querySelector(`${section} .paybackSlider`);
    let slideItems = document.querySelectorAll(`${section} .payback .cardWrap`);
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

    function dotChange(item) {
        dotItems.forEach(function (el) {
            el.classList.remove('active');
            if (el.dataset.dotNumber == item) {
                el.classList.add('active')
            }
        });
    }

    function changeCurrentSlide(item) {
        slideItems.forEach(function (el) {
            el.classList.remove('active');
            if (el.dataset.slideNumber == item) {
                el.classList.add('active')
            }
        });
    }

    let dotItems = document.querySelectorAll(`${section} .paybackSlider .dotItem`);
    dotItems.forEach(function (el) {
        el.addEventListener('click', function () {
            dotChange(el.dataset.dotNumber);
            changeCurrentSlide(el.dataset.dotNumber);
        });
    });
}
initCustomSlider('.section1');
initCustomSlider('.section2')