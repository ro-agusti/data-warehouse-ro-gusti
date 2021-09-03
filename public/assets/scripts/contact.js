/* const banner = document.getElementById('banner'); */


contactMenu.addEventListener('click', () => {
    contactMenu.classList.add('li-selected');
    banner.classList.remove('hidden');
    contactBoard.classList.remove('hidden');
});

btnAddContact.addEventListener('click', () => {
    newContact.classList.toggle('hidden');
});

btnCloseNewContact.addEventListener('click', () => {
    newContact.classList.toggle('hidden');
});
