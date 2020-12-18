import validation from './validation.js';

const modals = (modalOpen, modalWrapp) => {
    let modal = document.querySelector(modalWrapp),
        btn = document.querySelector(modalOpen),
        swipe = null;

    const modalHide = (eStart, type = 'click') => {
        let t = eStart.target,
            startY = eStart.targetTouches[0].pageY;
        if (t.classList.contains('modal') && type === 'click') {
            modal.classList.remove('active');
            modal.removeEventListener('touchstart', modalHide);
            document.body.classList.remove('modalActive');
        } else {
            swipe = modal.addEventListener('touchmove', (e) => {
                if ((e.changedTouches[0].pageY) > (startY + 50)) {
                    modal.classList.remove('active');
                    modal.removeEventListener('touchstart', modalHide);
                    swipe = null;
                    document.body.classList.remove('modalActive');
                }
            });
        }
    };

    const modalShow = () => {
        document.body.classList.add('modalActive');
        modal.classList.add('active');
        modal.addEventListener('touchstart', modalHide);
        validation('.modal form', '.inputWrapp .input input', '.inputWrapp .input .card img', '.inputWrapp .input', '.inputWrapp .next', 'button.submit');
    };

    btn.addEventListener('click', modalShow);
};

export default modals;