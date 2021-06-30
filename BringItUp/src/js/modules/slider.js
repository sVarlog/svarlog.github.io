export default class Slider {
    constructor(page, slides, btns, resetSlidesSelector) {
        this.page = document.querySelector(page);
        this.slides = this.page.querySelectorAll(slides);
        this.resetSlides = document.querySelectorAll(resetSlidesSelector);
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach((el, i) => {
            el.style.display = 'none';
            if (i === this.slideIndex - 1) {
                el.style.display = 'block';
            }
        });
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(el => {
            el.addEventListener('click', () => {
                this.plusSlides(1);
            });
        });

        this.resetSlides.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}