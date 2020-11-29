let status = 0,
    w = document.documentElement.clientWidth;

const oldContent = {
    menu: document.querySelector('.header-menu').cloneNode(true),
    icons: document.querySelector('.icons').cloneNode(true)
};
    
const menuInit = () => {
    let header = document.querySelector('.header'), 
        cont = document.querySelector('.wrapper'),
        headerMenu = header.querySelector('.header-menu'),
        menuBtn = document.createElement('div'),
        closeBtn = document.createElement('div'),
        newMenu = document.createElement('div');

    for (let i = 0; i < 3; i++) {
        let line = document.createElement('div');
        line.classList.add('menu-btn__line');
        menuBtn.append(line);
    }

    menuBtn.classList.add('menu-btn');
    newMenu.classList.add('new-menu');
    closeBtn.classList.add('menu-close');
    headerMenu.remove();
    header.append(menuBtn);
    newMenu.append(closeBtn, oldContent.menu);
    cont.after(newMenu);

    menuBtn.addEventListener('click', () => {
        cont.style.transition = '1s';
        newMenu.style.transition = '1s';
        cont.classList.add('menu-active');
        newMenu.classList.add('menu-active');
    });
    closeBtn.addEventListener('click', () => {
        cont.classList.remove('menu-active');
        newMenu.classList.remove('menu-active');
    })
};

const menuRemove = () => {
    let header = document.querySelector('.header'),
        cont = document.querySelector('.wrapper'),
        menuBtn = header.querySelector('.menu-btn');
    cont.classList.remove('menu-active');
    menuBtn.remove();
    document.querySelector('.new-menu').remove();
    header.append(oldContent.menu);
};

const sliderInit = () => {
    let wrapp = document.querySelector('.icons-wrapp'),
        inner = wrapp.querySelector('.icons'),
        items = inner.querySelectorAll('.icons-block'),
        dotsArea = document.createElement('div');
        dotsArea.classList.add('dots-area');
    inner.style.width = `${+items.length * 100}%`;
    inner.style.transition = '.5s';
    for (let i = 0; i < items.length; i++) {
        let dot = document.createElement('div');
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.classList.add('dot');
        dot.setAttribute('data-dot', i);
        dotsArea.append(dot);
    }
    wrapp.append(dotsArea);

    const events = () => {
        let dots = dotsArea.querySelectorAll('.dot');

        const changeDot = (num) => {
            dots.forEach(el => {
                el.classList.remove('active');
                if (el.dataset.dot === num) {
                    el.classList.add('active');
                };
            });
        };

        const move = (num) => {
            num = num.target.dataset.dot;
            inner.style.transform = `translateX(-${items[0].offsetWidth * num}px)`;
            changeDot(num);
        };

        dots.forEach(el => {
            el.addEventListener('click', move);
        });
    };
    events();
};

const sliderRemove = () => {
    document.querySelector('.icons').style = '';
};

const render = ([...func]) => {
    try {
        func.forEach(f => f());
    } catch (e) {
        console.log(e);
    }
};

const check = () => {
    w = document.documentElement.clientWidth;
    if (w < 576) {
        if (status === 0) {
            render([menuInit, sliderInit]);
            status = 1;
        }
    } else {
        if (status === 1) {
            render([menuRemove, sliderRemove]);
            status = 0;
        }
    }
};
check();

window.addEventListener('resize', check);