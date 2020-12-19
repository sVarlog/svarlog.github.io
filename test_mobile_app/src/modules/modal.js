const modals = (modalOpen, modalWrapp) => {
    let modal = document.querySelector(modalWrapp),
        btn = document.querySelectorAll(modalOpen),
        swipe = null;

    const modalHide = (eStart, type = 'click') => {
        let t = eStart.target,
            startY = eStart.targetTouches[0].pageY;
        if (t.classList.contains('modal') && type === 'click') {
            modal.style.transition = ".5s";
            modal.classList.remove('active');
            modal.removeEventListener('touchstart', modalHide);
            document.body.classList.remove('modalActive');
        } else {
            swipe = modal.addEventListener('touchmove', (e) => {
                if ((e.changedTouches[0].pageY) > (startY + 50)) {
                    modal.style.transition = ".5s";
                    modal.classList.remove('active');
                    modal.removeEventListener('touchstart', modalHide);
                    swipe = null;
                    document.body.classList.remove('modalActive');
                }
            });
        }
    };

    const modalShow = (e) => {
        e.preventDefault();
        modal.style.transition = "0s";
        document.body.classList.add('modalActive');
        modal.classList.add('active');
        modal.addEventListener('touchstart', modalHide);
    };

    btn.forEach(el => {
        el.addEventListener('click', modalShow);
    });
};

export default modals;