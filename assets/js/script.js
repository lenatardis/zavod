$(function($) {

    /*toggle header menu*/
    $('header button').click(function() {
        $('.header__menu').toggleClass('active');
        $('.open-block').toggleClass('hide');
        $('.close-block').toggleClass('show');
    });

    /*toggle header menu submenu*/
    $('.header__dropdown-link').click(function(e){
        e.preventDefault();
        $(this).next('.header__dropdown').slideToggle(100);
    })

    /*language dropdown*/
    $('.lang-dropdown__main').click(function(e){
        e.stopPropagation();
        $(this).next('.lang-dropdown__options').slideToggle();
        $(this).find('img').toggleClass('rotated-arr');
    })

    $('.lang-dropdown__options li').click(function(e){
        e.stopPropagation();
        let text = $(this).children('a').text();
        let dropdownToggle =  $(this).parents('.lang-dropdown').find('.lang-dropdown__main');
        dropdownToggle.find('.lang-dropdown__selected').text(text).next('img').removeClass('rotated-arr');
        $(this).parent().slideUp();
    })

    $(document).on('click', function(e) {
        let $dropdown = $('.lang-dropdown');
        if (!$dropdown.is(e.target) && !$dropdown.has(e.target).length) {
            $dropdown.find('.lang-dropdown__options').slideUp();
            $dropdown.find('img').removeClass('rotated-arr');
        }
    });
});