import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
        this.timer = null;
    }
    
    decorizeSlides() {
        [...this.slides].forEach(el => {
            el.classList.remove(this.activeClass);
            if (this.animate) {
                el.querySelector('.card__title').style.opacity = '0.4';
                el.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].tagName !== 'BUTTON') {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();

        this.appendBtns();
    }

    prevSlide() {
        let filteredSlides = [...this.slides].filter(el => el.tagName !== 'BUTTON'),
            active = filteredSlides[filteredSlides.length - 1];
        this.container.insertBefore(active, this.slides[0]);
        this.decorizeSlides();

        this.appendBtns();
    }

    appendBtns() {
        [...this.slides].forEach(el => {
            if (el.tagName == 'BUTTON') {
                this.container.appendChild(el);
            }
        });
    }

    bindTriggers() {
        this.next.forEach(el => el.addEventListener('click', () => this.nextSlide()));

        this.prev.forEach(el => el.addEventListener('click', () => this.prevSlide()));
    }

    setSliderPauseEvents(elements) {
        console.log(this.container);
        console.log(elements, 'elements');
        elements.forEach(el => {
            console.log(el);
            el.addEventListener('mouseenter', () => {
                console.log('pause');
                clearInterval(this.timer);
                this.timer = null;
            });
            el.addEventListener('mouseleave', () => {
                if (!this.timer) {
                    this.timer = setInterval(() => this.nextSlide(), this.timePlay || 5000);
                }
            });
        });
    }

    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                this.timer = setInterval(() => this.nextSlide(), this.timePlay || 5000);
                this.setSliderPauseEvents([this.next[0], this.prev[0], this.container]);
            }
        } catch (e) {}
    }
}