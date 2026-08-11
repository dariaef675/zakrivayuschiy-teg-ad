const dialog = document.querySelector('.dialog');
const openButton = document.querySelector('.save-button');
const closeButton = document.querySelector('.dialog-button');

openButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dialog.showModal();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dialog.close();
});