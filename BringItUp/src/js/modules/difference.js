export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers() {
        const showEvents = (elem, counter, itemsList) => {
            elem.addEventListener('click', () => {
                if (counter !== itemsList.length - 2) {
                    itemsList[counter].style.display = 'flex';
                    counter++;
                } else {
                    itemsList[counter].style.display = 'flex';
                    itemsList[itemsList.length - 1].remove();
                }
            });
        }
        showEvents(this.oldOfficer.querySelector('.plus'), this.oldCounter, this.oldItems);
        showEvents(this.newOfficer.querySelector('.plus'), this.newCounter, this.newItems);
    } 

    hideItems() {
        const hideItems = items => {
            items.forEach((el, i, arr) => {
                if (i !== arr.length - 1) {
                    el.style.display = 'none';
                }
            });
        }
        hideItems(this.oldItems);
        hideItems(this.newItems);
    }

    init() {
        this.hideItems();
        this.bindTriggers();
    }
}