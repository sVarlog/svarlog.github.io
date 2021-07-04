import MainSlider from './modules/slider/sliderMain';
import VideoPlayer from './modules/playVideo.js';
import MiniSlider from './modules/slider/sliderMini.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page', 
        btns: '.next', 
        resetSlidesSelector: '.sidecontrol .reset'
    });
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,
        timePlay: 5000
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});