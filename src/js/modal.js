var overlay = document.querySelector('.overlay');

var callButton = document.querySelector('.btn__call');
var callButtonBurger = document.querySelector('.brg__btn--call');
var callModal = document.querySelector('.call__modal');
var closeCallButton = document.querySelector('.btn__close--call');

callButton.addEventListener('click', function () {
  callModal.classList.remove('call__modal--hide');
  overlay.classList.add('overlay--active');
});

callButtonBurger.addEventListener('click', function () {
  callModal.classList.remove('call__modal--hide');
  overlay.classList.add('overlay--active');
});

closeCallButton.addEventListener('click', function () {
  callModal.classList.add('call__modal--hide');
  overlay.classList.remove('overlay--active');
});

document.addEventListener('keydown', function (event) {
  if(event.key === 'Escape') {
    callModal.classList.add('call__modal--hide');
    overlay.classList.remove('overlay--active');
  }
}); 


var feedbackButton = document.querySelector('.btn__chat');
var feedbackButtonBurger = document.querySelector('.brg__btn--feedback');
var feedbackModal = document.querySelector('.feedback__modal');
var closeFeedbackButton = document.querySelector('.btn__close--feedback');

feedbackButton.addEventListener('click', function () {
  feedbackModal.classList.remove('feedback__modal--hide');
  overlay.classList.add('overlay--active');
});

feedbackButtonBurger.addEventListener('click', function () {
  feedbackModal.classList.remove('feedback__modal--hide');
  overlay.classList.add('overlay--active');
});

closeFeedbackButton.addEventListener('click', function () {
  feedbackModal.classList.add('feedback__modal--hide');
  overlay.classList.remove('overlay--active');
});

document.addEventListener('keydown', function (event) {
  if(event.key === 'Escape') {
    feedbackModal.classList.add('feedback__modal--hide');
    overlay.classList.remove('overlay--active');
  }
}); 

overlay.addEventListener('click', function () {
  callModal.classList.add('call__modal--hide');
  feedbackModal.classList.add('feedback__modal--hide');
  overlay.classList.remove('overlay--active');
});

callModal.addEventListener('click', function (event) {
  event.stopPropagation();
});

feedbackModal.addEventListener('click', function (event) {
  event.stopPropagation();
});