import modals from './modules/modal.js';
import sendForm from './modules/sendForm.js';
import validation from './modules/validation.js';

window.addEventListener('DOMContentLoaded', () => {
    modals('button.modalOpen', '.modal');
    sendForm('.modal', '.modalLoad', '.modalConfirm', '.modalConfirm .send');
    validation('.modal form', '.inputWrapp .input input', '.inputWrapp .input .card img', '.inputWrapp .input', '.inputWrapp .next', 'button.submit');
});