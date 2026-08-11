const modal = document.querySelector('.dialog');
const openModalButton = document.querySelector('.save-button');
const closeModalButton = document.querySelector('.dialog-button');

openModalButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.showModal();
});

closeModalButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.close();
});