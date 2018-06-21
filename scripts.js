'use strict';
console.log('JS is working.');

// elements handling
let menu = document.getElementById('menu');
let hamburger_button = document.getElementById('menu-hamburger');


// hamburger icon toggle
hamburger_button.addEventListener('click', function() {
    if ( hamburger_button.classList.contains('hamburger_active') == true )
    {
        console.log(menu.classList.contains('hamburger_active'));
        hamburger_button.classList.remove('hamburger_active');
    }
    else {
        hamburger_button.classList.add('hamburger_active');
    }
});


// hamburger menu toggle
hamburger_button.addEventListener('click', function() {
    if ( menu.classList.contains('menu_active') == true )
    {
        console.log(menu.classList.contains('menu_active'));
        menu.classList.remove('menu_active');
    }
    else {
        menu.classList.add('menu_active');
    }
});

