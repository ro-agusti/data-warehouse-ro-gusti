
btnLogin.addEventListener('click', async () => {
    
    const loginObject = {
        "email": emailLogin.value,
        "password": passwordLogin.value
    };

    //POST LOGIN
    const urlLogin = 'http://localhost:3000/api/login'
try {
    
    const response = await fetch(urlLogin, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginObject)
    });
    let respuesta = await response.json();
    //console.log(respuesta);
    
    const token = respuesta.respuesta;
    const role = respuesta.role;

    localStorage.setItem('token',JSON.stringify(token));
    
    verifyRole(token,role);
    renderLoginErrorForms(respuesta.error);
} catch (error) {
    console.log(error);
}
});
