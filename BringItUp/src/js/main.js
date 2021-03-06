import MainSlider from './modules/slider/sliderMain';
import VideoPlayer from './modules/playVideo.js';
import MiniSlider from './modules/slider/sliderMini.js';
import Difference from './modules/difference.js';
import Forms from './modules/forms.js';
import ShowInfo from './modules/showInfo.js';
import Download from './modules/download.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page', 
        btns: '.next', 
        resetSlidesSelector: '.sidecontrol .reset'
    });
    slider.render();

    const modulePageSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.sidecontrol__controls .next',
        next: '.module__info-controls .next',
        prev: '.module__info-controls .prev'
    });
    modulePageSlider.render();

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

    const showPlayer = new VideoPlayer('.showup .play', '.overlay');
    showPlayer.init();
    const player = new VideoPlayer('.module__video-item .play', '.overlay');
    player.init();

    const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
    difference.init();

    const forms = new Forms('.form');
    forms.init();

    const showInfo = new ShowInfo('.plus__content');
    showInfo.init();

    const download = new Download('.download');
    download.init();
});