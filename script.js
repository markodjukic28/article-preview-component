const shareIcon = document.querySelector('.share-icon');
const shareClick = document.querySelector('.share-click');

let timeoutId;

shareIcon.addEventListener('click', function () {
  shareClick.classList.add('show');

  // clear previous timer (if exists)
  clearTimeout(timeoutId);

  // sets new timer
  timeoutId = setTimeout(function () {
    shareClick.classList.remove('show');
  }, 5000);
});
