var brgButton = document.querySelector('.btn__burger');
var brgMenu = document.querySelector('.brg');
var closeBtn = document.querySelector('.btn__close');
var overlayBrg = document.querySelector('.overlay__brg');

brgButton.addEventListener('click', function () {
  brgMenu.classList.toggle('brg__menu--hidden');
  overlayBrg.classList.add('overlay__brg--active');
});

closeBtn.addEventListener('click', function () {
  brgMenu.classList.add('brg__menu--hidden');
  overlayBrg.classList.remove('overlay__brg--active');
});

document.addEventListener('click', function (event) {
  if (
    !brgMenu.contains(event.target) && !brgButton.contains(event.target)
  ) {
    brgMenu.classList.add('brg__menu--hidden');
    overlayBrg.classList.remove('overlay__brg--active');
  }
});

document.addEventListener('keydown', function (event) {
  if(event.key === 'Escape') {
    brgMenu.classList.add('brg__menu--hidden');
    overlayBrg.classList.remove('overlay__brg--active');
  }
}); 