var close = document.getElementById('closeNavbar');
var open = document.getElementById('openNavbar');
var menu = document.getElementById('menu');

close.addEventListener('click', function() {
    console.log('you clicked close');
    menu.classList.remove('active')
    open.style.display = 'block';
});

open.addEventListener('click', function() {
    console.log('you clicked open');
    open.style.display = 'none';
    menu.classList.add('active')
});