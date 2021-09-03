//----verify role admin to display the menu correctly
const verifyRole = (token, role) => {
    if (!token) {
        console.log('error')
    } else {
        header.classList.toggle('hidden');
        login.classList.toggle('hidden');
        banner.classList.remove('hidden');
        contactBoard.classList.remove('hidden');
        contactMenu.classList.add('li-selected');
        if (role == 'ADMIN') {
            usersMenu.classList.remove('hidden');
        }
    }
};

//---error in login forms
const renderLoginErrorForms = (error) => {
    if (error) {
        let errorTitle = document.createElement('h7');
        errorTitle.classList.add('red-error');
        errorTitle.textContent = error;
        loginDiv.appendChild(errorTitle);
        //userDiv.appendChild(errorTitle);
    }
};

//---error in user forms
const renderUserErrorForms = (error) => {
    if (error) {
        let errorTitle = document.createElement('h7');
        errorTitle.classList.add('red-error');
        errorTitle.textContent = error;
        //loginDiv.appendChild(errorTitle);
        userDiv.appendChild(errorTitle);
    }
};

//---post user form successful

const renderSuccessfulPostForm = (mensaje) => {
    if (mensaje) {
        let successfulDiv = document.createElement('div');
        successfulDiv.classList.add('successful-post');
        postExitoso.appendChild(successfulDiv);
        let miniDiv = document.createElement('div');
        successfulDiv.appendChild(miniDiv);
        let crossDiv = document.createElement('i');
        crossDiv.classList.add('fas');
        crossDiv.classList.add('fa-times');
        miniDiv.appendChild(crossDiv);
        let titleDiv = document.createElement('h3');
        titleDiv.textContent = mensaje;
        miniDiv.appendChild(titleDiv);
        closePOSTsuccessful(crossDiv, successfulDiv);
    }
};

//
const closePOSTsuccessful = (close, successfulDiv) => {
    close.addEventListener('click', () => {
        successfulDiv.classList.add('hidden');
        contactMenu.classList.add('li-selected');
        usersMenu.classList.remove('li-selected');
        banner.classList.remove('hidden');
        contactBoard.classList.remove('hidden');
        newUser.classList.add('hidden');
    })
};
