window.addEventListener('load', function(){
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let oper = document.querySelector('select');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');
	let sum = null;
	/* Начальное значение инпута и знака операции*/
	let initialValue1  = inp1.value;
	let initialValue2  = inp2.value;
	let initialOper  = oper.value;
	/* Текущее значение переменных и знака операции*/
	let currentValue1 = null;
	let currentValue2 = null;
	let currentOper  = null;

	/* Основной калькулятор */
	btn.addEventListener('click', function(){
		let sign = oper.value;
		sum = parseInt(inp1.value) + sign + parseInt(inp2.value);
		res.innerHTML = eval(sum);
		currentValue1  = inp1.value;
		currentValue2  = inp2.value;
		currentOper = oper.value;
		document.querySelector('.go').disabled = true;
	});

	/* Работа кнопок и полей ввода */
	inp1.addEventListener('keydown', checking_symbols);
	inp2.addEventListener('keydown', checking_symbols);
	inp1.addEventListener('keyup', checking_similar);
	inp2.addEventListener('keyup', checking_similar);
	oper.addEventListener('click', checking_similar);

	/* Функция остановки ввода (кроме чисел) */
	function checkSym(evt) {
		let charCode = evt.charCode;
		if (charCode != 0) {
			if (charCode < 48 || charCode > 57) {
				evt.preventDefault();
				console.log("Пожалуйста, используйте только цифры");
			}
		}
	} 

	/* Проверка одинаковых значений */
	function checking_similar() {
		initialValue1  = inp1.value;
		initialValue2  = inp2.value;
		initialOper = oper.value;
		if (currentValue1 !== initialValue1 || currentValue2 !== initialValue2 || currentOper !== initialOper) {
			document.querySelector('.go').disabled = false;
		} else {
			document.querySelector('.go').disabled = true;
		}
	}

	/* Проверка на ввод символов и одинаковых значений */
	function checking_symbols() {
		let myInp = this;
		myInp.addEventListener( 'keypress', checkSym, false );
	}
});

