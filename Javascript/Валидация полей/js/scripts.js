window.addEventListener('load', function () {
/* Регулярные выражения */
    let check = {
        number: {reg: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/},
        string: {reg: /^[a-zа-яё]+$/i},
        email: {reg: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/}
    }

    let btn = document.querySelector('#btn');
    let fields = document.querySelectorAll('input[data-rule]');
    let box = document.querySelector('.client_data');

    box.addEventListener('click', function (e) {
        if (e.target.classList.contains('err')) {
            e.target.classList.remove('err');
        }
    })

    for(let i = 0; i < fields.length; i++) {
        btn.addEventListener('click', function(e) {
            let rule = fields[i].dataset.rule;
            let value = fields[i].value;

            if( check[rule].reg.test( value ) && value ){
                fields[i].classList.remove('err');
            } else {
                e.preventDefault();
                fields[i].classList.add('err');
            }
        })
    }
});