$(function ($) {

    /*toggle header menu*/
    $('header button').click(function () {
        $('.header__menu').toggleClass('active');
        $('.open-block').toggleClass('hide');
        $('.close-block').toggleClass('show');
    });

    /*toggle header menu submenu (header dropdown)*/
   /* $('.header__dropdown-link').click(function (e) {
        e.preventDefault();
        let dropdown = $(this).next('.header__dropdown');
        dropdown.slideToggle(100, function () {
            if (dropdown.is(':visible')) {
                dropdown.css('display', 'grid');
            }
        });
    });*/

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

    /*FAQ dropdown*/

    $('.FAQ__question').on('click', function(){
        let item = $(this).parents('.FAQ__item').eq(0);
        let currentAnswer = $(this).next('.FAQ__answer');
        let currentBtn = item.find('.FAQ__btn');
        item.parents('.FAQ').eq(0).find('.FAQ__answer').not(currentAnswer).slideUp();
        item.parents('.FAQ').eq(0).find('.FAQ__btn').not(currentBtn).removeClass('FAQ__btn-up');
        currentAnswer.slideToggle(100);
        currentBtn.toggleClass('FAQ__btn-up');
    })

    $('.FAQ__btn').on('click', function() {
        let item = $(this).parents('.FAQ__item').eq(0);
        let currentAnswer = item.find('.FAQ__answer');
        let currentBtn = $(this);
        item.parents('.FAQ').eq(0).find('.FAQ__answer').not(currentAnswer).slideUp();
        item.parents('.FAQ').eq(0).find('.FAQ__btn').not(currentBtn).removeClass('FAQ__btn-up');
        currentBtn.toggleClass('FAQ__btn-up');
        currentAnswer.slideToggle(100);
    });

    /* alike slider */

    $('.alike-grid').slick({
       /* autoplay: true,*/
        speed: 150,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
    });

function equalizeSlideHeights() {
    var maxHeight = 0;
    $('.alike-grid .product-item').each(function() {
        var thisHeight = $(this).outerHeight();
        if (thisHeight > maxHeight) { maxHeight = thisHeight; }
    });
    $('.alike-grid .product-item').height(maxHeight);
}

    equalizeSlideHeights();
    $('.alike-grid').on('setPosition', function() {
        console.log('hdhdl');
        equalizeSlideHeights();
    });

    $(window).resize(function() {
        equalizeSlideHeights();
    });