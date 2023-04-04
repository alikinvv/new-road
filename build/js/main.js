"use strict";

var banner = new Swiper('.banner .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.banner .swiper-button-next',
    prevEl: '.banner .swiper-button-prev'
  }
});
var main = new Swiper('.main .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.main .swiper-pagination',
    clickable: true
  }
});
var works = new Swiper('.works .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.works .swiper-button-next',
    prevEl: '.works .swiper-button-prev'
  }
});
var blog = new Swiper('.blog .swiper-container', {
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.blog .swiper-button-next',
    prevEl: '.blog .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.blog .swiper-slide').matchHeight();
    }
  }
});
var reviews = new Swiper('.reviews .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev'
  },
  breakpoints: {
    1279: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.reviews__link').matchHeight();
      $('.reviews__card').matchHeight();
    }
  }
});
var specialists = new Swiper('.specialists .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.specialists .swiper-button-next',
    prevEl: '.specialists .swiper-button-prev'
  },
  breakpoints: {
    1279: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.specialists__name').matchHeight();
    }
  }
});
var auto = new Swiper('.auto .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.auto .swiper-button-next',
    prevEl: '.auto .swiper-button-prev'
  },
  breakpoints: {
    1279: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  on: {
    afterInit: function afterInit() {
      $('.specialists__name').matchHeight();
    }
  }
});
var platforms = new Swiper('.platforms .swiper-container', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    1279: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  },
  pagination: {
    el: '.platforms .swiper-pagination',
    clickable: true
  }
});
var certs = new Swiper('.certs .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    1279: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  pagination: {
    el: '.certs .swiper-pagination',
    clickable: true
  }
});
var clients = new Swiper('.clients .swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    1279: {
      slidesPerView: 5,
      slidesPerGroup: 5
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },
  navigation: {
    nextEl: '.clients .swiper-button-next',
    prevEl: '.clients .swiper-button-prev'
  }
});
var projects = new Swiper('.projects .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  breakpoints: {
    1279: {
      slidesPerView: 2.1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev'
  },
  on: {
    afterInit: function afterInit() {
      $('.projects__text').matchHeight();
      $('.projects__company').matchHeight();
    }
  }
});
var productNav = new Swiper('.product__nav', {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      spaceBetween: 17,
      slidesPerView: 3
    },
    375: {
      spaceBetween: 10,
      slidesPerView: 2
    }
  }
  // navigation: {
  //     nextEl: '.product .swiper-button-next',
  //     prevEl: '.product .swiper-button-prev',
  // },
});

var productMain = new Swiper('.product__main', {
  spaceBetween: 10,
  thumbs: {
    swiper: productNav
  },
  navigation: {
    nextEl: '.product .swiper-button-next',
    prevEl: '.product .swiper-button-prev'
  }
});
$('body').on('click', '.header__search button', function (e) {
  $('.header__search').toggleClass('active');
  $(document).mouseup(function (e) {
    var container = $('.header__search');
    if (container.has(e.target).length === 0) {
      container.removeClass('active');
      $(document).unbind('mouseup');
      return false;
    }
  });
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.header__search').removeClass('active');
      $(document).unbind('keyup');
      return false;
    }
  });
  $('.header__search input').focus();
});
var makeTimer = function makeTimer() {
  var endTime = new Date('12 April 2023 9:56:00 GMT+02:00');
  endTime = Date.parse(endTime) / 1000;
  var now = new Date();
  now = Date.parse(now) / 1000;
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
  if (hours < '10') {
    hours = '0' + hours;
  }
  if (minutes < '10') {
    minutes = '0' + minutes;
  }
  if (seconds < '10') {
    seconds = '0' + seconds;
  }
  $('.days').html(days);
  $('.hours').html(hours);
  $('.minutes').html(minutes);
  $('.seconds').html(seconds);
};
setInterval(function () {
  makeTimer();
}, 1000);
var masks = document.querySelectorAll('.phone-mask');
masks.forEach(function (el) {
  IMask(el, {
    mask: '+{7} (000) 000 00 00'
  });
});
$('body').on('click', '.prices tbody td:first-child span', function (e) {
  $(e.currentTarget).parent().parent().next().toggleClass('active');
});
$('body').on('click', '.prices tbody td:last-child a', function (e) {
  $(e.currentTarget).parent().parent().next().toggleClass('active');
});
$('.card__title').matchHeight();
$('body').on('click', '.question', function (e) {
  e.preventDefault();
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle().toggleClass('active');
});
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [55.746499, 37.329568],
      zoom: 11
    }, {
      searchControlProvider: 'yandex#search'
    }),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
    myPlacemark = new ymaps.Placemark([55.76, 37.64], {
      balloonContent: '<span>техническая база №2</span><div>Москва, ш. Дмитровское, д. 107, к. 2</div>',
      iconContent: '1'
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/point.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38],
      iconContentOffset: [11, 12],
      iconContentLayout: MyIconContentLayout
    }),
    myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
      balloonContent: '<span>техническая база №2</span><div>Москва, ш. Дмитровское, д. 107, к. 2</div>',
      iconContent: '2'
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/point.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38],
      iconContentOffset: [10, 12],
      iconContentLayout: MyIconContentLayout
    });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});

// tabs .bar animation

if ($('.header__menu .active').length > 0) {
  $('.header__menu .bar').stop().animate({
    left: $('.header__menu .active').offset().left - $('.header__menu').offset().left,
    width: $('.header__menu .active').outerWidth()
  });
}
$('body').on('mouseenter', '.header__menu > a, .header__menu > div', function (e) {
  $('.header__menu .bar').stop().animate({
    left: $(e.currentTarget).offset().left - $('.header__menu').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.header__menu', function (e) {
  if ($('.header__menu .active').length > 0) {
    $('.header__menu .bar').stop().animate({
      left: $('.header__menu .active').offset().left - $('.header__menu').offset().left,
      width: $('.header__menu .active').outerWidth()
    });
  } else {
    $('.header__menu .bar').stop().animate({
      left: 0,
      width: 0
    });
  }
});
$('body').on('click', '.header__menu > a, .header__menu > div', function (e) {
  $('.header__menu .active').removeClass('active');
  $(e.currentTarget).addClass('active');
  $('.header__menu .bar').css({
    left: $('.header__menu .active').offset().left - $('.header__menu').offset().left,
    width: $('.header__menu .active').outerWidth()
  });
});
if ($('.tabs.line .active').length > 0) {
  $('.tabs.line .bar').stop().animate({
    left: $('.tabs.line .active').offset().left - $('.tabs.line').offset().left,
    width: $('.tabs.line .active').outerWidth()
  });
}
$('body').on('mouseenter', '.tabs.line > div', function (e) {
  $('.tabs.line .bar').stop().animate({
    left: $(e.currentTarget).offset().left - $('.tabs.line').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.tabs.line', function (e) {
  if ($('.tabs.line .active').length > 0) {
    $('.tabs.line .bar').stop().animate({
      left: $('.tabs.line .active').offset().left - $('.tabs.line').offset().left,
      width: $('.tabs.line .active').outerWidth()
    });
  } else {
    $('.tabs.line .bar').stop().animate({
      left: 0,
      width: 0
    });
  }
});
$('body').on('click', '.tabs.line > div', function (e) {
  $('.tabs.line .active').removeClass('active');
  $(e.currentTarget).addClass('active');
  $('.tabs.line .bar').css({
    left: $('.tabs.line .active').offset().left - $('.tabs.line').offset().left,
    width: $('.tabs.line .active').outerWidth()
  });
});
$('body').on('click', '.tabs div', function (e) {
  $('.tabs div').removeClass('active');
  $(e.currentTarget).addClass('active');
  $('.tab').removeClass('active');
  $(".tab[data-tab=\"".concat($(e.currentTarget).attr('data-tab'), "\"]")).addClass('active');
  $('.card__title').matchHeight();
});
$('body').on('click', '.product__info .link', function (e) {
  $(e.currentTarget).remove();
  $('.product__features.hide').slideDown(300);
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');
  $('.modal.active #dateFrom').click();
  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
});

// close modal events
var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('.hamburger').removeClass('active');
  $('.menu').removeClass('active');
  $('.modal').find('svg').removeClass('animate');
  $('html, body').removeClass('overflow');
};
$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
});
$('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);
$(window).on('resize', function () {
  if ($(window).width() < 1366) {
    $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 10);
  } else {
    $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);
  }
});
if ($(window).width() < 1366) {
  $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 10);
} else {
  $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 50);
}
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) $('.scrolltop').addClass('active');else $('.scrolltop').removeClass('active');
});
$('body').on('click', '.scrolltop', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});
if ($('.datepicker').length > 0) {
  $('#dateFrom').dateRangePicker({
    alwaysOpen: true,
    language: 'ru',
    inline: true,
    hoveringTooltip: false,
    container: '.datepicker__main',
    startOfWeek: 'monday',
    singleDate: true,
    singleMonth: true,
    getValue: function getValue() {
      if ($('#dateFrom').val() && $('#dateTo').val()) return $('#dateFrom').val() + ' to ' + $('#dateTo').val();else return '';
    },
    setValue: function setValue(s, s1, s2) {
      $('#dateFrom').val(s1);
      $('#dateTo').val(s2);
    }
  }).bind('datepicker-open', function () {
    $('.date-picker-wrapper').css('left', $('.datepicker').offset().left);
  });
}