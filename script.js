const shareIcon = document.querySelector('.share-icon');
const shareClick = document.querySelector('.share-click');

shareIcon.addEventListener('click', function () {
  shareClick.classList.add('show');

  setTimeout(function () {
    shareClick.classList.remove('show');
  }, 5000);
});
