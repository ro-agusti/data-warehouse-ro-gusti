usersMenu.addEventListener('click', () => {
    contactMenu.classList.remove('li-selected');
    usersMenu.classList.add('li-selected');
    banner.classList.add('hidden');
    contactBoard.classList.add('hidden');
    newUser.classList.toggle('hidden');
});


btnNewUser.addEventListener('click', async () => {
    const getToken = JSON.parse(localStorage.getItem('token'));
    //console.log(getToken);
    const newUserObject = {
        "firstName": nameNewUser.value,
        "lastName": surnameNewUser.value,
        "email": emailNewUser.value,
        "country": countryNewUser.value,
        "profile": profileNewUser.value,
        "password": passwordNewUser.value,
    };

    //POST USER
    const urlNewUser = 'http://localhost:3000/api/user';

    try {
        const response = await fetch(urlNewUser, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
            body: JSON.stringify(newUserObject)
        });
        let respuesta = await response.json();
        console.log(respuesta);
        renderUserErrorForms(respuesta.error);
        renderSuccessfulPostForm(respuesta.mensaje)

    } catch (error) {
        console.log(error);
    }
});
