const sendForm = (modalSelector, loadItem, confirmModal, confirmSend) => {
    let modal = document.querySelector(modalSelector),
        sendBtn = document.querySelector(confirmSend),
        formData = modal.querySelector('form'),
        conrfirm = document.querySelector(confirmModal),
        conrfirmClose = conrfirm.querySelector('.modalClose'),
        loadModal = document.querySelector(loadItem),
        form = modal.querySelector('form'),
        loadItems = loadModal.querySelectorAll('span'),
        seconds = loadModal.querySelector('#seconds'),
        totalSeconds = 15,
        curr = 0;

    const formReset = () => {
        conrfirm.classList.remove('active');
        formData.reset();
    };

    const complete = () => {
        conrfirm.classList.add('active');
        conrfirmClose.addEventListener('click', () => {
            formReset();
        });
    };

    const loading = () => {
        loadModal.classList.add('active');
        let process = () => {
            curr++;
            if (curr >= loadItems.length - 1) {
                curr = 0;
            }
            loadItems.forEach((el, i) => {
                el.classList.remove('active');
                if (i === curr) {
                    el.classList.add('active');
                }
            });
            if (totalSeconds > 0) {
                seconds.innerHTML = totalSeconds -= 1;
            }
        };
        process();

        let timer = setInterval(process, 1000);

        setTimeout(() => {
            clearInterval(timer);
            loadModal.classList.remove('active');
        }, totalSeconds * 1000);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        complete();
    });

    console.log(confirmSend);

    sendBtn.addEventListener('click', () => {
        conrfirm.classList.remove('active');
        loading();
    });
};

export default sendForm;