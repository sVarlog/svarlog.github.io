export default class Slider {
    constructor({container = null, next = null, btns = null, prev = null, resetSlidesSelector = null, activeClass = '', animate, autoplay, timePlay = 5000} = {}) {
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;} catch(e){}
        this.resetSlides = document.querySelectorAll(resetSlidesSelector);
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelectorAll(prev);
        this.next  = document.querySelectorAll(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.timePlay = timePlay;
    }
}