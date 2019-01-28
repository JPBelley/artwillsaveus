var burger = document.getElementById("burger");
var nav = document.getElementById("nav");

burger.addEventListener('click', function(e){
  this.classList.toggle('open');
  nav.classList.toggle('open');
}, false);
