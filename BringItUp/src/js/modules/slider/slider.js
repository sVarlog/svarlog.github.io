export default class Slider {
    constructor({container = null, next = null, btns = null, prev = null, resetSlidesSelector = null, activeClass = '', animate, autoplay, timePlay = 5000} = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.resetSlides = document.querySelectorAll(resetSlidesSelector);
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next  = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.timePlay = timePlay;
    }
}