$(function ($) {

    /*toggle header menu*/
    $('header button').click(function () {
        $('.header__menu').toggleClass('active');
        $('.open-block').toggleClass('hide');
        $('.close-block').toggleClass('show');
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

    /* mobile language dropdown */
    $('.mobile-lang-dropdown li').eq(0).addClass('active');
    $('.mobile-lang-dropdown li').on('click', function(e){
        e.preventDefault();
        $('.mobile-lang-dropdown li.active').removeClass('active');
        $(this).addClass('active');
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
        dots: true,
        appendDots: $('.m-slider__nav'),
        arrows: false
});
    /* manufacturing slider custom arrows*/

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

    $('.alike-slider').slick({
       /* autoplay: true,*/
        speed: 150,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        appendDots: $('.alike-slider__nav'),
        arrows: false,
        responsive: [
            {
                breakpoint: 1451,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* alike slider custom arrows*/
    $('.alike-slider__prev-btn').on('click', function () {$('.alike-slider').slick('slickPrev');});
    $('.alike-slider__next-btn').on('click', function () {$('.alike-slider').slick('slickNext');});
