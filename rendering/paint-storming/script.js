/* const $box = $('.box');

$box.on('click', () => {
  $box.animate({
    marginLeft: '500px',
  }, 500);
});
 */

const box = document.querySelector('.box');

box.addEventListener('mouseenter', () => {
  box.style.willChange = 'transform';
});

box.addEventListener('transitionend', () => {
  box.style.willChange = 'auto';
});

box.addEventListener('click', () => {
  box.classList.toggle('move');
});

box.addEventListener('mouseleave', () => {
  box.style.willChange = 'auto';
});
