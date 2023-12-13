const btn = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalOverlay = modalElement.querySelector('.modal__content');

btn.addEventListener('click', () => {
    modalElement.classList.add('open');
});

modalOverlay.addEventListener('click', () => {
    modalElement.classList.remove('open');
})