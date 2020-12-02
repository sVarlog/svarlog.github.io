const wow = () => {
    new WOW().init();
};

// file
const changeFileName = () => {
    let inp = document.querySelector('.header .secondRow input[type="file"]');
    let fileName = document.querySelector('.header .secondRow .fileName');
    inp.addEventListener('input', () => {
        let output = inp.value.slice(inp.value.lastIndexOf("\\") + 1);
        fileName.innerHTML = output;
    });
};

const openModal = () => {
    let items = document.querySelectorAll('.section .item'),
        modal = document.querySelector('.modal'),
        modalContent = modal.querySelector('.modalContent');

    const close = (e) => {
        t = e.target;
        if (t.classList.contains('modal') || t.classList.contains('modalClose')){
            modal.classList.remove('active');
        }
    };

    const show = (el) => {
        let element = el.target.cloneNode(true);
        modal.classList.add('active');
        modalContent.innerHTML = '';
        modalContent.append(element);
        window.addEventListener('click', close);
    };

    items.forEach(el => {
        el.addEventListener('click', show)
    });
};

const customSlider = () => {
    let slider = document.querySelector('.customSlider'),
        sliderInner = slider.querySelector('.sliderInner'),
        sliderItems = sliderInner.querySelectorAll('.item'),
        arrPrev = slider.querySelector('.arrowPrev'),
        arrNext = slider.querySelector('.arrowNext'),
        current = slider.querySelector('.current'),
        total = slider.querySelector('.total'),
        step = 0;

    sliderInner.style.width = `${sliderItems.length * 100}%`;
    let stepWidth = +sliderItems[0].offsetWidth + (+getComputedStyle(sliderItems[0]).marginLeft.replace(/\D/g, '') * 2);
    total.innerText = sliderItems.length;

    const currStep = (s = 1) => {
        current.innerHTML = s;
    };
    currStep();

    const activeItems = (s = 0, e = 3) => {
        sliderItems.forEach((el, i) => {
            el.classList.remove('active');
            if (i >= s && i < e) {
                el.classList.add('active');
            }
        });
    };
    activeItems();

    const move = (dir) => {
        if (dir === 'next') {
            if (step < sliderItems.length - 1) {
                step += 1;
                currStep(step + 1);
                activeItems(step, step + 3);
            } else {
                step;
            }
            sliderInner.style.transform = `translateX(-${step * stepWidth}px)`;
        } else if (dir === 'prev') {
            if (step > 0) {
                step -= 1;
                currStep(step + 1);
                activeItems(step, step + 3);
            } else {
                step;
            }
            sliderInner.style.transform = `translateX(-${step * stepWidth}px)`;
        }
    };

    arrNext.addEventListener('click', () => {
        move('next');
    });
    arrPrev.addEventListener('click', () => {
        move('prev');
    });

    sliderItems.forEach(function (el) {
        el.addEventListener('touchstart', handleTouchStart, false)
    });
    sliderItems.forEach(function (el) {
        el.addEventListener('touchmove', handleTouchMove, false)
    });

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
        return evt.touches ||
            evt.originalEvent.touches;
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                move('next');
            } else {
                move('prev');
            }
        }
        xDown = null;
        yDown = null;
    };

    window.addEventListener('resize', () => {
        stepWidth = +sliderItems[0].offsetWidth + (+getComputedStyle(sliderItems[0]).marginLeft.replace(/\D/g, '') * 2);
    });
};

const render = ([...func]) => {
    func.forEach(f => {
        try {
            f();
        } catch(e) {
            console.log(e);
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    render([wow, changeFileName, openModal, customSlider]);
});