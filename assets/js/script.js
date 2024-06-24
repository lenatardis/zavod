$(function ($) {

    /*toggle header menu*/
    $('header button').click(function () {
        $('.header__menu').toggleClass('active');
        $('.open-block').toggleClass('hide');
        $('.close-block').toggleClass('show');
    });

    /*toggle header menu submenu (header dropdown)*/
    $('.header__dropdown-link').click(function (e) {
        e.preventDefault();
        let dropdown = $(this).next('.header__dropdown');
        dropdown.slideToggle(100, function () {
            if (dropdown.is(':visible')) {
                dropdown.css('display', 'grid');
            }
        });
    });

    /*language dropdown*/
    $('.lang-dropdown__main').click(function (e) {
        e.stopPropagation();
        $(this).next('.lang-dropdown__options').slideToggle();
        $(this).find('img').toggleClass('rotated-arr');
    })

    $('.lang-dropdown__options a').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        let text = $(this).text();
        let dropdownToggle = $(this).parents('.lang-dropdown').eq(0).find('.lang-dropdown__main');
        dropdownToggle.find('.lang-dropdown__selected').text(text).next('img').removeClass('rotated-arr');
        $(this).parents('.lang-dropdown__options').eq(0).slideUp();
    })

    $(document).on('click', function (e) {
        let $dropdown = $('.lang-dropdown');
        if (!$dropdown.is(e.target) && !$dropdown.has(e.target).length) {
            $dropdown.find('.lang-dropdown__options').slideUp();
            $dropdown.find('img').removeClass('rotated-arr');
        }
    });

    /*hero slider*/

    $('.hero-slider').slick({
        autoplay: true,
        speed: 150,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
    });
});

    /*manufacturing slider */
    $('.m-slider').slick({
        autoplay: true,
        speed: 150,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
});
    $('.m-slider__prev-btn').on('click', function () {$('.m-slider').slick('slickPrev');});
    $('.m-slider__next-btn').on('click', function () {$('.m-slider').slick('slickNext');});

    /* phone validation */

    $('#phone').on('input', function() {
        let input = $(this).val();
        let sanitizedInput = input.replace(/[^0-9+]/g, '').replace(/(?!^)\+/g, '');
        $(this).val(sanitizedInput);
    });
