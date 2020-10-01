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