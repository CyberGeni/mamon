// navigation bar
var mode = document.getElementById('mode');
var close = document.getElementById('closeNavbar');
var open = document.getElementById('openNavbar');
var menu = document.getElementById('menu');
var body = document.getElementById('body');

close.addEventListener('click', function() {
    console.log('you\'re closing the navbar');
    menu.classList.remove('active')
    open.style.display = 'block';
    body.style.overflowY = 'scroll';
});

open.addEventListener('click', function() {
    console.log('you\'re opening the navbar');
    open.style.display = 'none';
    menu.classList.add('active')
    body.style.overflow = 'hidden';
});

// dark mode toggle
mode.addEventListener('click', function() {
    console.log('you\'re toggling between modes');
    body.classList.toggle('dark')
    menu.classList.toggle('dark')

});