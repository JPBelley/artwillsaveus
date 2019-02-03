// var lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;
//
// function moveBackground() {
//   x += (lFollowX - x) * friction;
//   y += (lFollowY - y) * friction;
//
//   translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
//
//   document.querySelectorAll('.hero')[0].style.transform = translate;
//
//   window.requestAnimationFrame(moveBackground);
// }
//
// window.addEventListener('mousemove', function(e) {
//
//   var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
//   var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
//   lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//   lFollowY = (10 * lMouseY) / 100;
//
// });
//
// // moveBackground();
// console.log('here');
var s = skrollr.init();
