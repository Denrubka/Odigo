'use strict'
const modal = document.querySelector('.modal');

const modalOpen = () => {
  const links = document.querySelectorAll('.view-all');

  links.forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.add('show');
      document.body.style.overflow = "hidden";
    });
  });
};

const modalClose = () => {
  modal.addEventListener('click', (event) => {
    const target = event.target;
    if(!target.classList.contains('modal-block') && target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  })
};
modalClose();
modalOpen();