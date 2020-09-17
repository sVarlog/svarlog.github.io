(() => {
	let currentWidth = checkWidth();
	let currentState = 0;
	let swithcerState = 0;
	let sections = document.querySelectorAll('.pageItem');
	let catalogWrap = document.querySelector('.catalog .row');
	let switcherWrap = document.createElement('div');

	const pageChange = () => {
		sections.forEach((el, index) => {
			el.classList.remove('active');
			if(index == 1){
				el.classList.add('active');
			}
			el.setAttribute('data-section', index + 1);
			if(swithcerState == 0){
				let switchItem = document.createElement('h3');
				switchItem.classList.add('switchItem');
				switchItem.setAttribute('data-switch', index + 1);
				if(index == 0){
					switchItem.innerHTML = 'КАТЕГОРИИ';
					switchItem.style.borderBottomRightRadius = '10px';
				} else if(index == 1){
					switchItem.innerHTML = 'ТОВАРЫ';
					switchItem.classList.add('active');
					switchItem.style.borderBottomLeftRadius = '10px';
				}
				switcherWrap.append(switchItem);
			}
		});
		swithcerState = 1;

		const changeCurrentSection = (num) => {
			sections.forEach((el) => {
				el.classList.remove('active');
				if(el.dataset.section == num){
					el.classList.add('active');
				}
			});
		}

		const changeSwitch = (item) => {
			switchItem.forEach((el) => {
				el.classList.remove('active');
				item.classList.add('active');
			});
		}

		let switchItem = switcherWrap.querySelectorAll('.switchItem');
		switchItem.forEach((el) => {
			el.onclick = () =>{
				changeSwitch(el);
				changeCurrentSection(el.dataset.switch);
			}
		})

		switcherWrap.classList.add('switcherWrap', 'col-12');
		catalogWrap.prepend(switcherWrap);
	}

	const pageReturn = () => {
		switcherWrap.remove();
	}

	const checkPageWidth = (w) => {
		if(w < 768){
			if(currentState == 0){
				pageChange();
			}
			currentState = 1;
		} else{
			if(currentState == 1){
				pageReturn();
			}
			currentState = 0;
		}
	}
	checkPageWidth(currentWidth);

	window.addEventListener('resize', function(){
		currentWidth = checkWidth();
		checkPageWidth(currentWidth);
	})
})();