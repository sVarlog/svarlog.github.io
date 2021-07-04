import Slider from './slider';

export default class MainSlider extends Slider{
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        if (this.hanson) {
            this.hanson.style.opacity = '0';
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('fadeIn');
                }, 3000);
            }  else {
                this.hanson.classList.remove('fadeIn');
            }
        }

        [...this.slides].forEach((el, i) => {
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
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e) {

        }

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