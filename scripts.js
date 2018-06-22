'use strict';
console.log('JavaScript is working in strict mode.');

// variables and DOM elements handlers
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

// scroll height spy for toggle menu
window.addEventListener('scroll', function() {
  let scroll_level = window.scrollY; //watch scroll level on scroll event.

  // when You scroll 100px menu is dropped to top:-70px
  if (scroll_level >= 100) {
    menu.classList.add('drop-menu');
  } else {
    menu.classList.remove('drop-menu');
  }

  // when You scroll to 700px, menu is dropped to top: 0.
  if (scroll_level >= 700) {
    menu.classList.add('drop-menu_active');
  } else {
    menu.classList.remove('drop-menu_active');
  }
});

// hamburger icon toggle
let hamburger_button = document.getElementById('menu-hamburger');
let menu = document.getElementById('menu');

hamburger_button.addEventListener('click', function() {
  // if icon have active class lets remove active class
  if (hamburger_button.classList.contains('hamburger_active') == true) {
    hamburger_button.classList.remove('hamburger_active');
  }
  // if icon have not active class lets add active class
  else {
    hamburger_button.classList.add('hamburger_active');
  }
});


// hamburger menu toggle
hamburger_button.addEventListener('click', function() {
  // if menu have active class lets remove active class
  if (menu.classList.contains('menu_active') == true) {
    menu.classList.remove('menu_active');
  }
  // if menu have not active class lets add active class
  else {
    menu.classList.add('menu_active');
  }
});

// form selects
let form__select_dropmenu = document.getElementById('form__select_dropmenu');
let form__select_packets = document.getElementById('form__select_packets');
let prices__content_hello = document.getElementById('hello');
let prices__content_pricing = document.getElementById('pricing');
let packets__content_starter = document.getElementById('pack-desc_starter');
let packets__content_medium = document.getElementById('pack-desc_medium');
let packets__content_full = document.getElementById('pack-desc_full');

prices__content_hello.classList.add('hello_active');

// section selector listener
form__select_dropmenu.addEventListener('click', function() {
  // hello, initial option
  if (form__select_dropmenu.options[form__select_dropmenu.selectedIndex].value == 'hello') {
    prices__content_hello.classList.add('hello_active');
  } else {
    prices__content_hello.classList.remove('hello_active')
  };

  // princing option
  if (form__select_dropmenu.options[form__select_dropmenu.selectedIndex].value == 'pricing') {
    prices__content_pricing.classList.add('pricing_active');
  } else {
    prices__content_pricing.classList.remove('pricing_active');
  }

  // packets option
  if (form__select_dropmenu.options[form__select_dropmenu.selectedIndex].value == 'packets') {
    form__select_packets.classList.add('packets_active');
    packets__content_starter.classList.add('starter_active');
  } else {
    form__select_packets.classList.remove('packets_active');
    packets__content_starter.classList.remove('starter_active');
    packets__content_medium.classList.remove('medium_active');
    packets__content_full.classList.remove('full_active');
  }

})

// packet selector listener
form__select_packets.addEventListener('click', function() {

  // packet starter option
  if (form__select_packets.options[form__select_packets.selectedIndex].value == 'starter') {
    packets__content_medium.classList.remove('medium_active');
    packets__content_full.classList.remove('full_active');
    console.log('class removed. medium full');
    packets__content_starter.classList.add('starter_active');
    console.log('class added. starter');
  }

  // packet medium option
  if (form__select_packets.options[form__select_packets.selectedIndex].value == 'medium') {
    packets__content_starter.classList.remove('starter_active');
    packets__content_full.classList.remove('full_active');
    console.log('class removed. starter full');
    packets__content_medium.classList.add('medium_active');
    console.log('class added. medium');
  }

  // packet full option
  if (form__select_packets.options[form__select_packets.selectedIndex].value == 'full') {
    packets__content_starter.classList.remove('starter_active');
    packets__content_medium.classList.remove('medium_active');
    console.log('class removed. starter medium');
    packets__content_full.classList.add('full_active');
    console.log('class added. full');
  }
});