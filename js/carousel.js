

const slider = document.querySelector('.card-scroll');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

// var clicked = true;
// var options = {
//   containment: '.card-scroll',
//   cursor: 'move',
//   start: function (event, ui) {
//     clicked = false;
//   },
//   stop: function (event, ui) {
//     setTimeout(function () {
//       clicked = true;
//     }, 10);
//   }
// };

// $('div.map').draggable(options);

// var counter = 0;

// var $span = $('#ClickCounter > span');
// var $dummies = $('.dummy');
// $dummies.click(function () {
//   if (clicked) {
//     $span.html(++counter);
//   }
//   clicked = true;
// });
