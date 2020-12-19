import customSlider from './modules/customSlider.js';
import modals from './modules/modal.js';

window.addEventListener('DOMContentLoaded', () => {
    customSlider('.customSlider', '.sliderInner', '.item');
    modals('.openModalProcessed', '.modalProcessed');
    modals('.openRebilsModal', '.modalRebils');
    modals('.openPercentModal', '.modalPercent');
    modals('.balance', '.modalBalance');
    modals('.openExpectedIncomeModal', '.expectedIncomeModal');
    modals('.openExpectedIncomeFreeModal', '.expectedIncomeFreeModal');
    modals('.openTotalIncomeModal', '.totalIncomeModal');
});