$(document).ready(function() {
  headerToggle();
  asideNav();
  modalFancyboxInit();
  mainSliderInit();
  filterSelect();
  tabsInit();

  // header menu toggle
  function headerToggle() {
    $('.js-nav-mobile-toggle').on('click', function (e) {
      $(this).toggleClass('is-active');
      $('body').toggleClass('is-menu-opened');
      $('.header__nav').toggleClass('is-show');
      e.preventDefault();
    });
  }

  // aside nav
  function asideNav() {
    $('.js-aside-nav-link-toggle').click(function() {
      $(this).toggleClass('is-active');
      $(this).next('ul').toggleClass('is-show');
      return false;
    });
  }

  // filter select
  function filterSelect() {
    $('.js-filter-collapse').click(function() {
      var filterActive = $(this).parents('.u-filter-select');
      $('.u-filter-select').not(filterActive).removeClass('is-active');
      filterActive.toggleClass('is-active');
      return false;
    });
  }

  // modal fancybox
  function modalFancyboxInit() {
    $('[data-u-modal]').fancybox({
      autoFocus: false,
      touch: false,
      afterClose: function() {
      },
      beforeShow: function() {
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

  // tabs init
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
});