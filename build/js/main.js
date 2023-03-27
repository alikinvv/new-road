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
    1280: {
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