// КОД jQuery
$(document).ready(function () {
    // База данных предметов в инвентаре
    var weapons = [
        {
            "name": "44_pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 5.2,
            "value": 99
        },
        {
            "name": "10mm_pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 5.2,
            "value": 53
        },
        {
            "name": "assault_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        }
    ];

    // Чекбокс - предмет в инвентаре экипирован
    $('.item-list a').on('click', function (e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    // Передача в html параметров каждого предмета
    $('.item-list a').on('mouseenter', function (e) {
       var current_item = $(e.currentTarget).attr('class');

       for (item in weapons) {
           if(weapons[item].name == current_item){
               var container = $('.item-stats');                    // данное условие поместит значение из класса js в класс html item-stats
               container.find('.damage').html(weapons[item].damage);
               container.find('.fire_rate').html(weapons[item].fire_rate);
               container.find('.range').html(weapons[item].range);
               container.find('.fire_rate').html(weapons[item].fire_rate);
               container.find('.accuracy').html(weapons[item].accuracy);
               container.find('.weight').html(weapons[item].weight);
               container.find('.value').html(weapons[item].value);
           }
       }
    });



})