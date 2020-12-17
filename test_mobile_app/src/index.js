import modals from './modules/modal.js';
import sendForm from './modules/sendForm.js';

window.addEventListener('DOMContentLoaded', () => {
    modals('button.modalOpen', '.modal');
    sendForm('.modal', '.modalLoad');
});