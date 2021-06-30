import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.slide', '.next', '.sidecontrol .reset');
    slider.render();
});