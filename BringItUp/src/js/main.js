import MainSlider from './modules/slider/sliderMain';
import VideoPlayer from './modules/playVideo.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page', slides: '.slide', btns: '.next', resetSlidesSelector: '.sidecontrol .reset'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});