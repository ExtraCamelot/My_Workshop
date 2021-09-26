window.addEventListener('load', function(){

	/* Переменные */
	let menu = document.querySelector('.menu');
	let titles = document.querySelector('.content')
	let headline = titles.querySelectorAll('h2');

	menu.addEventListener('click', function(e){
		let link = e.target;
		/* Отмена стандартного перехода по якорю */
		if(link.classList.contains('menu__link')){
			e.preventDefault();
			scrollToTarget(link.hash);
		}
	});

	/* Условие для перехода со внешних ресурсов */
	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}
	/* Функция плавного скрола к объекту */
	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});
		}
	}

	/* Кнопка вверх */
	let btn_t = document.querySelector('.btn__top');
	/* Возврат наверх */
	btn_t.addEventListener('click', ()=>{
		window.scrollTo({top: 0, behavior: 'smooth'});
	});
	
	window.addEventListener('scroll', ()=> {
		/* Появление кнопки */
		if (window.pageYOffset > 350) {
			btn_t.classList.add('btn__top-active');
		} else {
			btn_t.classList.remove('btn__top-active');
		}

		/* Получение координат положения заголовков при скролле и изменение активного класса */
		let scrollDistance = window.pageYOffset;
		headline.forEach((el, i) => {
			if (el.offsetTop - (menu.clientHeight + 170) <= scrollDistance) {
				/* Удаление активного класса */
				document.querySelectorAll('.menu a').forEach((el) => {
					if (el.classList.contains('menu__link-active')) {
						el.classList.remove('menu__link-active');
					}
				});
				/* Добавление активного класса i-пункту меню */
				document.querySelectorAll('.menu a')[i].classList.add('menu__link-active');
			}
		});

	});
});
