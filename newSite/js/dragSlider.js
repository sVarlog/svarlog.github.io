function initDragSlider(section, num, arrows = false, sliderType = 1){
	let currentWidth = checkWidth();
	let currentSection = document.querySelector(section);
	let slider = document.querySelector(`${section} .dragSlider`);
	let sliderWrap = document.querySelector(`${section} .dragSliderWrap`);
	let sliderWidth = (sliderWrap.offsetWidth) - (getComputedStyle(sliderWrap).padding.replace(/[^-0-9]/gim,'') * 2);
	let items = slider.querySelectorAll('.item');
	let imgs = slider.querySelectorAll('img');
	let step = 0;
    let count;
	let itemWidth;

    const windowWidth = (w) =>{
        if(sliderType == 2){
            if(w >= 992){
                count = 3;
            } else if(w < 992){
                count = 1;
            }
        } else if(sliderType == 1){
            count = 1;
        }

        sliderWidth = (sliderWrap.offsetWidth) - (getComputedStyle(sliderWrap).padding.replace(/[^-0-9]/gim,'') * 2);

        items.forEach((el) => {
        let countItems = 1;
            if(count <= 2){
                countItems = 1;
            } else{
                countItems = count - 1;
            }
            let width = (sliderWidth - ((getComputedStyle(items[0]).margin.replace(/[^-0-9]/gim,'') * 2) * countItems)) / count;
            el.style.minWidth = `${width}px`;
            el.style.width = `${width}px`;
        });
        itemWidth = items[0].offsetWidth + (getComputedStyle(items[0]).margin.replace(/[^-0-9]/gim,'') * 2);

        slider.style.width = `${+items.length * +itemWidth}px`;
    }
    windowWidth(currentWidth);

	if(num <= 1){
		slider.style.margin = '0';
	}

	window.onresize = () => {
		currentWidth = checkWidth();
        windowWidth(currentWidth);
	}

	const moveTo = (step) => {
		items.forEach((el) => {
			el.style.transform = `translateX(${step * itemWidth}px)`;
		});
	}

	slider.addEventListener('mousedown', handleMouseStart, false);
 	slider.addEventListener('mousemove', handleTouchMove, false);

 	slider.addEventListener('touchstart', handleTouchStart, false);
 	slider.addEventListener('touchmove', handleTouchMove, false);

	let xDown = null;                                                        
    let yDown = null;

    function getTouches(evt){
    	if(evt.type == 'mousedown'){
    		return evt;
    	} else {
			return evt.touches;
    	}
    }

    function handleTouchStart(evt){
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };

    function handleMouseStart(evt){
        const firstTouch = getTouches(evt);                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt){
        if(! xDown || ! yDown){
            return;
        }

        let xUp = null;
        let yUp = null;

        if(evt.type == 'mousemove'){
        	xUp = evt.clientX;
        	yUp = evt.clientY;
        } else {
	        xUp = evt.touches[0].clientX;                                    
	        yUp = evt.touches[0].clientY;
	    }

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if(Math.abs(xDiff) > Math.abs(yDiff)){
            if(xDiff > 0){
                // left
                if(step <= (-items.length + count)){
            		step;
            	} else{
	                step -= 1;
	            }
                moveTo(step);
            } else{
                /* right swipe */
                if(step >= 0){
                	step = 0;
                } else {
	                step += 1;
	            }
                moveTo(step);
            }                       
        } else{
            if(yDiff > 0){
                /* up swipe */ 
            } else{ 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                           
    };

    if(arrows){
    	const generateArrows = () => {
    		const arrowsArea = document.createElement('div');
    		const nextArrow = document.createElement('div');
    		const prevArrow = document.createElement('div');
    		arrowsArea.classList.add('arrows');
    		nextArrow.classList.add('arrow', 'next');
    		prevArrow.classList.add('arrow', 'prev');
    		prevArrow.innerHTML = `<img src="img/arrows/blueArrowLeft.png" alt="prev">`;
    		nextArrow.innerHTML = `<img src="img/arrows/blueArrowRight.png" alt="prev">`;
    		currentSection.append(arrowsArea);
    		arrowsArea.append(prevArrow);
    		arrowsArea.append(nextArrow);

    		nextArrow.onclick = () => {
    			if(step <= (-items.length + count)){
    				step;
    			} else {
    				step -= 1;
    			}
    			moveTo(step);
    		}
    		prevArrow.onclick = () => {
    			if(step >= 0){
    				step = 0;
    			} else {
    				step += 1;
    			}
    			moveTo(step);
    		}
    	}
    	generateArrows();
    }
}