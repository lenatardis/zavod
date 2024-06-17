$(function($) {
    $('header button').click(function() {
        $('.header__menu').toggleClass('active');
        $('.open-block').toggleClass('hide');
        $('.close-block').toggleClass('show');
    });

    $('.header__dropdown-link').click(function(e){
        e.preventDefault();
        $(this).next('.header__dropdown').slideToggle(100);
    })
});