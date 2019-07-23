var navPosition = '';

var navScrollTop = function(selector, position) {
  selector.scroll(function(event){
      var st = $(this).scrollTop();


      if(st > position) {
        document.querySelector('nav').classList.add('scroll');
      } else {
        // $('.cookie').removeClass('onFooter');
        document.querySelector('nav').classList.remove('scroll');
      }
      // lastScrollTopFooter = st;
  });
}


navScrollTop($(window), navPosition);

var burger = document.getElementById("burger");

burger.addEventListener('click', function (e) {
  this.classList.toggle('open');
}, false);
