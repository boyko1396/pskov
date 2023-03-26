microModalInit();

$(document).ready(function() {
  tabsInit();
  mainSliderInit();

  // tabs
  function tabsInit() {
    $('.js-tabs-nav-layout').click(function() {
      if($(this).hasClass('is-active')) {
        event.preventDefault();
      }
      else {
        $('.js-tabs-nav-layout').removeClass('is-active');
        $(this).addClass('is-active');
        $('.js-tabs-content-layout > div').removeClass('is-show');
        var activeTab = $(this).attr('href');
        $(activeTab).addClass('is-show');
        event.preventDefault();
      }
    });
  }

  // slider slick init
  function mainSliderInit() {
    if ($('.js-main-slider-init').length > 0) {
      $('.js-main-slider-init').slick({
        adaptiveHeight: true,
        arrows: true,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-arrow slick-arrow--prev'><svg class='slick-arrow__icon'><use xlink:href='images/sprite.svg#arrow-2'></use></svg></button>",
        nextArrow: "<button type='button' class='slick-arrow slick-arrow--next'><svg class='slick-arrow__icon'><use xlink:href='images/sprite.svg#arrow-2'></use></svg></button>"
      });
    }
  }

  // header menu toggle
  $('.js-nav-mobile-toggle').on('click', function (e) {
    $(this).toggleClass('is-active');
    $('body').toggleClass('is-menu-opened');
    $('.header__nav').toggleClass('is-show');
    e.preventDefault();
  });
});

// micro modal init
function microModalInit() {
  MicroModal.init({ 
    disableScroll: true
  });
}