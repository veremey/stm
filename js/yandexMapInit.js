
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.880823, 37.537859],
            zoom: 17
        });
        myPlacemark = new ymaps.Placemark([55.881271, 37.537719],
        {
            hintContent: 'г. Москва, Дмитровское шоссе, <br /> дом 107, строение 14',
        // }, {
            balloonContent: '<div class="mapt_contant"><div class="mapt__town">г. Москва, Дмитровское шоссе, дом 107, строение 14</div><div class="mapt_tel"><a href="tel:+7 (495) 485-69-09">+7 (495) 485-69-09</a><a href="tel:+7 (495) 638-5189">+7 (495) 638-5189</a></div><div class="mapt_mail"><a href="mailto:t4110839@yandex.ru ">t4110839@yandex.ru </a><a href="mailto:4856909@mail.ru">4856909@mail.ru</a></div></div>'},
        {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [78, 63],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).

    }, {
      balloonShadow: false
    });
    myMap.geoObjects.add(myPlacemark);
     myMap.behaviors
         .disable(['scrollZoom']);

});




var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.746993, 37.608284], // Москва
        zoom: 17
    });

    // document.getElementById('destroyButton').onclick = function () {
    //     // Для уничтожения используется метод destroy.
    //     myMap.destroy();
    // };

  };

  // смотри js/yandexMapInit.js


  //  #####  Карта AND ######