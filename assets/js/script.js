$(function($) {

    /*toggle header menu*/
    $('header button').click(function() {
        $('.header__menu').toggleClass('active');
        $('.open-block').toggleClass('hide');
        $('.close-block').toggleClass('show');
    });

    /*toggle header menu submenu (header dropdown)*/
    $('.header__dropdown-link').click(function(e){
        e.preventDefault();
        let dropdown = $(this).next('.header__dropdown');
        dropdown.slideToggle(100, function() {
            if (dropdown.is(':visible')) {
                dropdown.css('display', 'grid');
            }
        });
    });

    /*language dropdown*/
    $('.lang-dropdown__main').click(function(e){
        e.stopPropagation();
        $(this).next('.lang-dropdown__options').slideToggle();
        $(this).find('img').toggleClass('rotated-arr');
    })

    $('.lang-dropdown__options a').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        let text = $(this).text();
        let dropdownToggle =  $(this).parents('.lang-dropdown').find('.lang-dropdown__main');
        dropdownToggle.find('.lang-dropdown__selected').text(text).next('img').removeClass('rotated-arr');
        $(this).parents('.lang-dropdown__options').slideUp();
    })

    $(document).on('click', function(e) {
        let $dropdown = $('.lang-dropdown');
        if (!$dropdown.is(e.target) && !$dropdown.has(e.target).length) {
            $dropdown.find('.lang-dropdown__options').slideUp();
            $dropdown.find('img').removeClass('rotated-arr');
        }
    });
});