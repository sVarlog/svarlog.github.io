export default class Slider {
    constructor({page = '', slides = '', next = '', btns = '', prev = '', resetSlidesSelector = ''} = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.querySelectorAll(slides);
        this.resetSlides = document.querySelectorAll(resetSlidesSelector);
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
}