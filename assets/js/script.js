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
        autoplay: true,
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

    /* certification slider*/

    $('.certification-slider').slick({
        autoplay: true,
        speed: 150,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        appendDots: $('.certification-slider__nav'),
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

    /* certification slider custom arrows*/
    $('.certification-slider__prev-btn').on('click', function () {
        $('.certification-slider').slick('slickPrev');
    });
    $('.certification-slider__next-btn').on('click', function () {
        $('.certification-slider').slick('slickNext');
    });

    /* calculator tabs*/

    $('.tab-wrap>div').hide();
    $('.tab-wrap>div:first-of-type').addClass('active-tab').show();
    $('.custom-tabs li:first-of-type').addClass('active-li');
    $('.custom-tabs li').on('click', function () {
        $(this).parent().find('.active-li').removeClass('active-li');
        $(this).addClass('active-li');
        $(this).parents('.custom-tabs').eq(0).find('.active-tab').removeClass('active-tab').hide();
        $($(this).attr('data-tab')).addClass('active-tab').show();
        $('.custom-table').find('.grid-table').remove();
        $('.custom-table').children('p').css('display','none');
    });

    function selectProxyGeneration() {
        $('.select-proxy').each(function(){
            let placeholder = $(this).prev('.select-wrap').eq(0).find('option').eq(0).text();
            $(this).find('.custom-placeholder').text(placeholder);
        })
    }

    /* calculator data */

    $.ajax({
    url: "https://karyer.devplace.info/wp-json/rest/v1/get_product/",
    type: 'POST',
    success: function (response) {
        console.log(response);
        localStorage.setItem('tableData', JSON.stringify(response));
    }
    });


    //table generation

    let table3Layers = ' <div class="grid-table">\n' +
        '                        <!--row 1-->\n' +
        '                        <div>Шар</div>\n' +
        '                        <div>Матеріали</div>\n' +
        '                        <div>Товщина, см</div>\n' +
        '                        <div>Вага, тонн</div>\n' +
        '                        <div>Об\'єм, м<sup>3</sup></div>\n' +
        '                        <div>Вартість, грн</div>\n' +
        '                        <!--row 2-->\n' +
        '                        <div class="t-layer"><a href="#">Шар №3<br/>Вирівнюючий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer3">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div>2</div>\n' +
        '                        <div class="weight-cell">11</div>\n' +
        '                        <div>125</div>\n' +
        '                        <div class="value-cell">4123</div>\n' +
        '                        <!--row 3-->\n' +
        '                        <div class="t-layer"><a href="#">Шар №2<br/>Підстилаючий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer2">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div>5</div>\n' +
        '                        <div class="weight-cell">32</div>\n' +
        '                        <div>300</div>\n' +
        '                        <div class="value-cell">7588</div>\n' +
        '                        <!--row 4-->\n' +
        '                        <div class="t-layer"><a href="#">Шар №1<br/>Несучий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer1">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div>20</div>\n' +
        '                        <div class="weight-cell">8</div>\n' +
        '                        <div>245</div>\n' +
        '                        <div class="value-cell">4512</div>\n' +
        '                        <!--row 5-->\n' +
        '                        <div class="t-layer"></div>\n' +
        '                        <div></div>\n' +
        '                        <div class="merged"></div>\n' +
        '                        <div class="total-title">Загальна вартість</div>\n' +
        '                        <div class="t-total">16223.00</div>\n' +
        '                    </div>';

    let table4Layers = ' <div class="grid-table">\n' +
        '                        <!--row 1-->\n' +
        '                        <div>Шар</div>\n' +
        '                        <div>Матеріали</div>\n' +
        '                        <div>Товщина, см</div>\n' +
        '                        <div>Вага, тонн</div>\n' +
        '                        <div>Об\'єм, м<sup>3</sup></div>\n' +
        '                        <div>Вартість, грн</div>\n' +
        '                        <!--row 2-->\n' +
        '                        <div class="t-layer"><a href="#">Шар №4<br/>Вирівнюючий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer4">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div>2</div>\n' +
        '                        <div class="weight-cell">11</div>\n' +
        '                        <div>125</div>\n' +
        '                        <div class="value-cell">4123</div>\n' +
        '                        <!--row 3-->\n' +
        '                        <div class="t-layer"><a href="#">Шар №3<br/>Підстилаючий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer3">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div>5</div>\n' +
        '                        <div class="weight-cell">32</div>\n' +
        '                        <div>300</div>\n' +
        '                        <div class="value-cell">7588</div>\n' +
        '                         <!--row4-->\n' +
        '                         <div class="t-layer"><a href="#">Шар №2<br/>Підстилаючий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer2">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                         <div>5</div>\n' +
        '                         <div class="weight-cell">32</div>\n' +
        '                         <div>300</div>\n' +
        '                         <div class="value-cell">7588</div>\n' +
        '                        <!--row 5-->\n' +
        '                        <div class="t-layer"><a href="#">Шар №1<br/>Несучий</a></div>\n' +
        '                        <div class="material-cell">\n' +
        '                            <label class="select-wrap">\n' +
        '                                <select class="hidden-select" name="layer1">\n' +
        '                                </select>\n' +
        '                            </label>\n' +
        '                            <div class="select-proxy">\n' +
        '                                <div class="custom-placeholder"></div>\n' +
        '                                <span></span>\n' +
        '                            </div>\n' +
        '                            <ul class="options-list">\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <div>20</div>\n' +
        '                        <div class="weight-cell">8</div>\n' +
        '                        <div>245</div>\n' +
        '                        <div class="value-cell">4512</div>\n' +
        '                        <!--row 6-->\n' +
        '                        <div class="t-layer"></div>\n' +
        '                        <div></div>\n' +
        '                        <div class="merged"></div>\n' +
        '                        <div class="total-title">Загальна вартість</div>\n' +
        '                        <div class="t-total">16223.00</div>\n' +
        '                    </div>';

    //table type detection and generation
    const type1 = 'Пішохідна доріжка';
    const type2 = 'Під\'їздна дорога';
    const type3 = 'Основна дорога';

const selectData = {
    type1: {  // Пішохідна доріжка
        layer1: [265, 259],
        layer2: [269, 267],
        layer3: [256, 255, 253]
    },
    type2: {  // Підїзна дорога
        layer1: [258, 264],
        layer2: [259, 265],
        layer3: [269],
        layer4: [255, 253]
    },
    type3: {  // Основна дорога
        layer1: [258, 264],
        layer2: [259, 265],
        layer3: [269, 267],
        layer4: [255, 253]
    }
};

function populateOptions(type) {
    const layersData = selectData[type];
    const layersKeys = Object.keys(layersData).reverse();

    $('.material-cell').each(function(index) {
        const layerIds = layersData[layersKeys[index]];
        const optionsList = $(this).find('.options-list');
        optionsList.empty();
        let tableData = JSON.parse(localStorage.getItem('tableData'));
        layerIds.forEach(id => {
            const product = tableData.find(product => product.ID === id);
            if (product) {
                const option = `<li data-price="${product.prise}" data-density="${product.density}" data-url="${product.url}">${product.title}</li>`;
                optionsList.append(option);
            }
        });

        let hiddenSelect = optionsList.prevAll('.select-wrap').eq(0).find('.hidden-select');
        hiddenSelect.empty();
        optionsList.find('li').each(function() {
            const selectOption = `<option value="${$(this).text()}">${$(this).text()}</option>`;
            hiddenSelect.append(selectOption);
        });
    });
}

function innerTableRowCalculations(el) {
    let currentCell =  el.parents('.material-cell').eq(0);
    let square = parseFloat(el.parents('.grid-table').attr('data-square'));
    let thickness = parseInt(currentCell.next().text());
    let density = parseFloat(el.attr('data-density'));
    let coeff = el.parents('.grid-table').attr('data-coeff');
    let weight = ((square * thickness * density)/coeff).toFixed(2);
    let weightCell = currentCell.nextAll('.weight-cell').eq(0);
    weightCell.text(weight);
    let volume = (weight * density).toFixed(2);
    weightCell.next().text(volume);
    let price = parseFloat(el.attr('data-price'));
    let value = (weight * price).toFixed(2);
    weightCell.nextAll('.value-cell').eq(0).text(value);
}

function totalCount(){
    let total = 0;
    $('.value-cell').each(function(){
        total+=parseFloat($(this).text());
    });
    $('.t-total').text(total.toFixed(2));
}

function tableInit() {
    selectProxyGeneration();
    $('.options-list').each(function(){
        let firstItem = $(this).children('li').eq(0);
        innerTableRowCalculations(firstItem);
        let url = firstItem.attr('data-url');
        firstItem.parents('.material-cell').eq(0).prev().find('a').attr('href', url);
    })
    totalCount();
}

//digit input dynamic validation
$(document).on('input', '.custom-tabs input', function() {
    $(this).val($(this).val().replace(/\D/g, ''));
    if ($(this).parent().find('p').length) {
        $(this).parent().find('p').remove();
    }
});

//form validation and dynamic table generation
$('.calc-wrap .btn').on('click', function (e) {
    e.preventDefault();
    let length = $(this).prev().find('input').eq(0).val();
    let width = $(this).prev().find('input').eq(1).val();
    let formSquare = $(this).prev().find('input').eq(2).val();

    if (length && width || formSquare) {
        //ok
        if (length && width && !formSquare) {
            $(this).prev().find('input').eq(2).val(parseFloat(length * width));
        }
        if ($(this).prev().find('p').length) {
            $(this).prev().find('p').remove();
        }
        let square = parseFloat(length * width) || parseFloat(formSquare);
        //edge case
        if (length && width && formSquare) {
            square = parseFloat(formSquare);
        }
        console.log(square);

        let activeTab = $(this).parents('.calc-wrap').eq(0).find('.custom-tabs .active-li').text();
        let wrap = $('.custom-table');
        wrap.find('.grid-table').remove();


        if (activeTab === type1) {
            wrap.append(table3Layers);
            $('.grid-table').attr('data-type', 'type1');
            $('.grid-table').attr('data-coeff', 0.95);
            $('.grid-table').attr('data-square', square);

            populateOptions('type1');
            tableInit();
        } else if (
            activeTab === type2
        ) {
            wrap.append(table4Layers);
            $('.grid-table').attr('data-type', 'type2');
            $('.grid-table').attr('data-coeff', 0.95);
            $('.grid-table').attr('data-square', square);

            populateOptions('type2');
            tableInit();
        } else {
            wrap.append(table4Layers);
            $('.grid-table').attr('data-type', 'type3');
            $('.grid-table').attr('data-coeff', 0.92);
            $('.grid-table').attr('data-square', square);

            populateOptions('type3');
            tableInit();
        }

        wrap.children('p').css('display','block');
    } else {
        if (!$(this).prev().find('p').length) {
            $(this).prev().append('<p style="color:red; font-weight:600; padding-bottom:20px;">Введіть, будь ласка, необхідні дані!</p>')
        }
        $('.custom-table').find('.grid-table').remove();
        $('.custom-table').children('p').css('display','none');
    }

    });

    /*select dropdown*/
    $(document).on('click', '.select-proxy', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
    if(!$(this).attr('selected')) {
        let placeholder = $(this).prev('.select-wrap').eq(0).find('option').eq(0).text();
        $(this).find('.custom-placeholder').text(placeholder);
    }
    $('.select-proxy').attr('selected',true);
});

    //select change actions and table recalculation
    $(document).on('click', '.options-list li', function() {
        let selectedItem =  $(this).text();
        $(this).parent().prev().find('.custom-placeholder').text(selectedItem);
        $(this).parent().prev().attr('selected',true);
        $(this).parent().slideToggle();
        $(this).parent().prev('.select-proxy').toggleClass('open');

        innerTableRowCalculations($(this));

        //recalculating total value
        totalCount();
        let url = $(this).attr('data-url');
        $(this).parents('.material-cell').eq(0).prev().find('a').attr('href', url);

    });



