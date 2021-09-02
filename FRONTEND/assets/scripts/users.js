usersMenu.addEventListener('click', () => {
    contactMenu.classList.remove('li-selected');
    usersMenu.classList.add('li-selected');
    banner.classList.add('hidden');
    contactBoard.classList.add('hidden');
    newUser.classList.toggle('hidden');
});

btnNewUser.addEventListener('click', async() => {

    const getToken = JSON.parse(localStorage.getItem('token'));
   console.log(getToken);

    const newUserObject = {
        firstname: nameNewUser.value,
        lastname: surnameNewUser.value,
        country: countryNewUser.value,
        profile: profileNewUser.value,
        password: passwordNewUser.value,
    }

    console.log(newUserObject)

    const urlNewUser = 'http://localhost:3000/api/user';

    const response = await fetch(urlNewUser, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken}`
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(newUserObject)
    }).catch(error => console.log(error))
    

    let respuesta = await response.json();
    //-------ver error JSON.parse ???
    console.log(respuesta);

});