var burger = document.getElementById("burger");
var nav = document.getElementById("nav");
var bee = document.getElementById("bee");

burger.addEventListener('click', function(e){
  this.classList.toggle('open');
  nav.classList.toggle('open');
  bee.classList.toggle('menu-open');
}, false);
