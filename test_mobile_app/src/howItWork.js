import customSlider from './modules/customSlider.js';

window.addEventListener('DOMContentLoaded', () => {
    customSlider('.workSlider', '.sliderWrapp', '.sliderInner', '.item', true, -15, 100);
});