const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.save-button');
const closeModalButton = document.querySelector('.modal__button');


openModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.showModal();
  modal.classList.add('opened');
});


closeModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.close(); 
});


modal.addEventListener('close', () => {
  modal.classList.remove('opened');
});
