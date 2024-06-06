function init() {
    let map = new ymaps.Map('map', {
        center: [54.626479070041825,39.74237549999994],
        zoom: 16
    })
    let placemark2 = new ymaps.Placemark([54.626479070041825,39.74237549999994], {
        balloonContent: `
        <div class = "balloon__adress"> Цит </div>
        <div class = "ballon__tagline"> Поставка и сопровождение готовых <br> информационных систем для различных задач. </div>

        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/метка.png',
        iconImageSize: [60, 75],
        iconImageOffset: [-20, -55]

    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    map.controls.remove('geolocationControl');
    map.geoObjects.add(placemark2);

}
ymaps.ready(init);