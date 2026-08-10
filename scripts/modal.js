const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.save-button');

openModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.showModal();
  modal.classList.add('opened');
});

modal.addEventListener('close', () => {
  modal.classList.remove('opened');
});
