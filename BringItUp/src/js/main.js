import Slider from './modules/slider.js';
import VideoPlayer from './modules/playVideo.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.slide', '.next', '.sidecontrol .reset');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});