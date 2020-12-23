const tabs = (sectionSelector, mainBtnSelector, secondBtnSelector, mainContentSelector, seconContentSelector) => {
    let section = document.querySelector(sectionSelector),
        mainBtns = section.querySelectorAll(mainBtnSelector),
        secondBtns = section.querySelectorAll(secondBtnSelector),
        contentsMain = section.querySelectorAll(mainContentSelector),
        contentsSecond = section.querySelectorAll(seconContentSelector);
    let mainContentsHeight = [],
        secondContentsHeight = [];

    const firstRender = () => {
        contentsSecond.forEach(el => {
            secondContentsHeight.push(el.offsetHeight);
            el.style.height = 0;
        });

        contentsMain.forEach(el => {
            mainContentsHeight.push(el.offsetHeight);
            el.style.height = 0;
        });
    };
    firstRender();

    const tabShow = (type, i) => {
        console.log(i);
        if (type === 'main') {
            if (contentsMain[i].classList.contains('active')) {
                mainBtns[i].classList.remove('active');
                contentsMain[i].style.height = `0`;
                contentsMain[i].style.minHeight = `0`;
                contentsMain[i].classList.remove('active');
            } else {
                mainBtns[i].classList.add('active');
                contentsMain[i].style.minHeight = `${mainContentsHeight[i]}px`;
                contentsMain[i].style.height = `auto`;
                contentsMain[i].classList.add('active');
            }
        } else if (type === 'second') {
            if (contentsSecond[i].classList.contains('active')) {
                contentsSecond[i].style.height = `0`;
                contentsSecond[i].style.minHeight = `0`;
                contentsSecond[i].classList.remove('active');
            } else {
                contentsSecond[i].style.minHeight = `${contentsSecond[i]}px`;
                contentsSecond[i].style.height = `auto`;
                contentsSecond[i].classList.add('active');
            }
        }
    };

    mainBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            tabShow('main', i);
        });
    });

    secondBtns.forEach((el, i) => {
        el.addEventListener('click', () => {
            tabShow('second', i);
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabs', '.tabBtn.first', '.tabBtn.second', '.tabContent.first', '.tabContent.second');
});