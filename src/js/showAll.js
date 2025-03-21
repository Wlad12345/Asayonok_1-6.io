var textBtn = document.querySelector('.text__button');
var hiddenText = document.querySelector('.text__paragraf');

textBtn.addEventListener('click', function () {
  textBtn.classList.toggle('text__button--hidden');
  hiddenText.classList.toggle('paragraf--hidden');
  if (textBtn.classList.contains("text__button--hidden")) {
    textBtn.textContent = 'Скрыть';
  } else {
    textBtn.textContent = 'Читать далее';
  }
});


var showAllButton = document.querySelector(".service__button--show");
var brandsList = document.querySelector('.service__items');

showAllButton.addEventListener('click', function () {
  showAllButton.classList.toggle('button__show--hidden');
  brandsList.classList.toggle('show__brands');
  if (showAllButton.classList.contains("button__show--hidden")) {
    showAllButton.textContent = 'Скрыть';
  } else {
    showAllButton.textContent = 'Показать все';
  }
});

var deviceAllButton = document.querySelector(".device__button--show");
var devicesList = document.querySelector('.device__items');

deviceAllButton.addEventListener('click', function () {
  deviceAllButton.classList.toggle('button__device--hidden');
  devicesList.classList.toggle('show__device');
  if (deviceAllButton.classList.contains("button__device--hidden")) {
    deviceAllButton.textContent = 'Скрыть';
  } else {
    deviceAllButton.textContent = 'Показать все';
  }
});