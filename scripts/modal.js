const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.save-button');
const closeModalButton = document.querySelector('.modal__button');

openModalButton.addEventListener('click', () => {
  modal.showModal();
  modal.classList.add('opened');
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('close', () => {
  modal.classList.remove('opened');
});
