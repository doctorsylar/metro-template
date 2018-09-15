'use strict';
$(function () {
    // MENU TOGGLE
    $('div.menu-toggler > i').click(function () {
        $('#menu-placeholder').toggleClass('show');
        $('.menu-toggler > i').toggleClass('fa-bars');
        $('.menu-toggler > i').toggleClass('fa-times');
    });
    // CAROUSEL
    let carousel = $('.owl-carousel');
    carousel.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false
    });
    $('.arrow-item.left').click(function () {
        carousel.trigger('prev.owl.carousel');
    });
    $('.arrow-item.right').click(function () {
        carousel.trigger('next.owl.carousel');
    });
});