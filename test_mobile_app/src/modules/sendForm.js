const sendForm = (modalSelector, loadItem) => {
    console.log(loadItem);
    let modal = document.querySelector(modalSelector),
        loadModal = document.querySelector(loadItem),
        form = modal.querySelector('form'),
        loadItems = loadModal.querySelectorAll('span'),
        seconds = loadModal.querySelector('#seconds'),
        totalSeconds = 15,
        curr = 0;

    const loading = () => {
        loadModal.classList.add('active');
        let process = () => {
            console.log(curr);
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
        loading();
    });
};

export default sendForm;