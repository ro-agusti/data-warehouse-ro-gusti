locationMenu.addEventListener('click', () => {
    contactMenu.classList.remove('li-selected');
    usersMenu.classList.remove('li-selected');
    locationMenu.classList.add('li-selected');
    banner.classList.add('hidden');
    contactBoard.classList.add('hidden');
    newUser.classList.add('hidden');
    locationSection.classList.remove('hidden')
})