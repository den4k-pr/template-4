$(document).ready(function () {
    $('.gallery').slick({
        infinite: true,          // вічний
        slidesToShow: 1,          // 1 слайд
        slidesToScroll: 1,        // листання по 1
        arrows: true,             // 2 кнопки
        dots: false,
        autoplay: false,          // БЕЗ автоскролу
        speed: 400,               // плавно, без "каші"
        swipe: true,
        touchThreshold: 10,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true
    });
});