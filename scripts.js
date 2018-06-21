'use strict';
console.log('JavaScript is working in strict mode.');

// variables and DOM elements handlers
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

let menu = document.getElementById('menu');
let hamburger_button = document.getElementById('menu-hamburger');

let form__select_options = document.getElementById("form__select_options");
let form__select_topics = document.getElementById("form__select_topics");
let form__select_lorem = document.getElementById("form__select_lorem");

// scroll height spy for toggle menu
window.addEventListener('scroll', function() {
    let scroll_level = window.scrollY; //watch scroll level on scroll event.

    // when You scroll 100pxs menu is dropped to top:-70px
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
hamburger_button.addEventListener('click', function() {
    // if icon have active class lets remove active class
    if ( hamburger_button.classList.contains('hamburger_active') == true )
    {
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
    if ( menu.classList.contains('menu_active') == true )
    {
        menu.classList.remove('menu_active');
    }
    // if menu have not active class lets add active class
    else {
        menu.classList.add('menu_active');
    }
});

console.log(form__select_options.options[form__select_options.selectedIndex].value);

// form selects
form__select_options.addEventListener('click', function() {
    if (form__select_options.options[form__select_options.selectedIndex].value == 'selects') {
        form__select_topics.style.display = "block";
        form__select_lorem.style.display = "block";
    }
    if (form__select_options.options[form__select_options.selectedIndex].value != 'selects') {
    form__select_topics.style.display = "none";
    form__select_lorem.style.display = "none";
}
})

