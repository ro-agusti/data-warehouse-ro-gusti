/* const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const btnLogin = document.getElementById('button-login');

//const menu = document.getElementById('menu-div');
const header = document.getElementById('header');
const login = document.getElementById('login');
const contact = document.getElementById('contact'); */
//console.log(contact)

btnLogin.addEventListener('click', async () => {
    const loginObject = {
        email: emailLogin.value,
        password: passwordLogin.value
    };
    //POST LOGIN
    const urlLogin = 'http://localhost:3000/api/login'

    const response = await fetch(urlLogin, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(loginObject)
    }).catch(error => console.log(error));

    let respuesta = await response.json();

    const token = respuesta.respuesta;
    const role = respuesta.role;

    localStorage.setItem('token',JSON.stringify(token));
    
    verifyRole(token,role);
});

const verifyRole = (token,role) => {
    if (!token) {
        console.log('error')
    } else {
        header.classList.toggle('hidden');
        login.classList.toggle('hidden');
        banner.classList.remove('hidden');
        contactBoard.classList.remove('hidden');
        contactMenu.classList.add('li-selected');
        if (role=='ADMIN') {
            usersMenu.classList.remove('hidden');
        }
    }
};
