"use strict";
var headerColors = {
  default: {
    header: 'transparent',
    svg: 'white',
    phone: 'white'
  },
  changed: {
    header: 'white',
    svg: 'black',
    phone: 'black'
  }
};
var bodyBlock = document.querySelector('body');
var sliderChangerNext = document.querySelector('.slider-changer__arrow');
var sliderChangerPrev = document.querySelector('.slider-changer__arrow_left');
var hamburger = document.querySelector('.header__hamburger');
var menu = document.querySelector('.navigation-menu');
var sliderControls = document.querySelectorAll('.slider-changer__arrow');
var sliderCounterAmount = document.querySelector('.slider-changer__counter-amount');
var sliderCounterCurrent = document.querySelector('.slider-changer__counter-current');

var changeHeader = function (headerColor, svgHeaderColor, phoneColor) {
  var headerItem = document.querySelector('.header');
  var svgHeader = document.querySelector('.header__logo').querySelector('svg');
  var phoneNumber = document.querySelector('.header__social').querySelector('a');
  headerItem.style.backgroundColor = headerColor;
  svgHeader.style.fill = svgHeaderColor;
  phoneNumber.style.color = phoneColor;
}
var setChangedHeader = function () {
  changeHeader(headerColors.changed.header, headerColors.changed.svg, headerColors.changed.phone);
  hamburger.classList.add('header__hamburger_changed');
}
var setDefaultHeader = function () {
  changeHeader(headerColors.default.header, headerColors.default.svg, headerColors.default.phone);
  hamburger.classList.remove('header__hamburger_changed');
}
var scrollWindowHandler = function () {
  if (window.pageYOffset > 0) {
    setChangedHeader();
  } else {
    setDefaultHeader();
  }
};
var openMenuHandler = function () {
  menu.classList.toggle('navigation-menu_show');
  bodyBlock.classList.toggle('body-overflow-hidden');
  hamburger.classList.toggle('header__hamburger_open');
  if (window.pageYOffset > 0 || menu.classList.contains('navigation-menu_show')) {
    setChangedHeader();
  } else {
    setDefaultHeader();
  }
};

hamburger.addEventListener('click', openMenuHandler);
window.addEventListener('scroll', scrollWindowHandler);
