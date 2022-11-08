$(function() {
	// Menu opener hamburger
    $('.hamburger').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu__item_submenu').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('hamburgerer');
    });
     

});