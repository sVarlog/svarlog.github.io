export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.message = {loading: 'Loading...', success: 'Thanks! We will contact with you soon!', failure: 'Something wrong...'},
        this.path = 'assets/question.php'
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    initMask() {
        const setCursorPosition = (pos, elem) => {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };

        const createMask = (event) => {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = event.target.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            event.target.value = matrix.replace(/./g,  (a) => {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (event.target.value.length === 2) {
                    event.target.value = '';
                }
            } else {
                setCursorPosition(event.target.value.length, event.target);
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(el => {
            el.addEventListener('input', createMask);
            el.addEventListener('focus', createMask);
            el.addEventListener('blur', createMask);
        });
    }

    clearInputs() {
        this.inputs.forEach(el => {
            el.value = '';
        });
    }

    checkMainInputs() {
        const mailInputs =  document.querySelectorAll('[type="email"]');

        mailInputs.forEach(el => {
            el.addEventListener('input', function (e) {
                el.value = el.value.replace(/[^a-z 0-9 @ \. -]/ig, '');
            });
        })
    }

    init() {
        this.checkMainInputs();
        this.initMask();
        console.log(this.inputs);
        this.forms.forEach(el => {
            el.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    fonr-size: 18px;
                    color: grey;
                `;
                el.parentNode.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(el);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res, 'res');
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(e => {
                        console.log(e);
                        statusMessage.textContent = this.message.failure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        });
    }
}