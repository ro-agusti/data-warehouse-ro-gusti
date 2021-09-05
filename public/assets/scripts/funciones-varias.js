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

//---close user form
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

//---render region successful
const renderRegion = (region, idRegion) => {

    let divRegion = document.createElement('div');
    divRegion.classList.add('div-region');
    locationSection.appendChild(divRegion);

    let regionNameActions = document.createElement('div');
    regionNameActions.classList.add('region-name-actions');
    divRegion.appendChild(regionNameActions);

    let h3NameRegion = document.createElement('h3');
    h3NameRegion.textContent= region;
    regionNameActions.appendChild(h3NameRegion);

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-acciones');
    btnEdit.classList.add('btn-actions');
    regionNameActions.appendChild(btnEdit);

    let iEdit = document.createElement('i');
    iEdit.classList.add('fas');
    iEdit.classList.add('fa-edit');
    btnEdit.appendChild(iEdit);

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-acciones');
    btnDelete.classList.add('btn-actions');
    regionNameActions.appendChild(btnDelete);

    let iDelete = document.createElement('i');
    iDelete.classList.add('fas');
    iDelete.classList.add('fa-trash-alt');
    btnDelete.appendChild(iDelete);

    //EDIT region
    btnEdit.addEventListener('click', () => {
        addInput.classList.remove('hidden');

        btnAddInput.addEventListener('click', async () => {
            const regionValue = inputValueAdd.value;
            const getToken = JSON.parse(localStorage.getItem('token'));
            const newRegionObject = {
                "name": regionValue
            }
            //PUT region
            const urlNewUser = `http://localhost:3000/api/region/${idRegion}`;
    
            try {
                const response = await fetch(urlNewUser, {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken}`
                    },
                    body: JSON.stringify(newRegionObject)
                });
                let respuesta = await response.json();
                console.log(respuesta);
    
                addInput.classList.add('hidden');
    
            } catch (error) {
                console.log(error);
            }
        })
    })

    //DELETE region
    btnDelete.addEventListener('click', async() => {
        const getToken = JSON.parse(localStorage.getItem('token'));
        const urlNewUser = `http://localhost:3000/api/region/${idRegion}`;

        try {
            const response = await fetch(urlNewUser, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken}`
                },
                //body: JSON.stringify(newRegionObject)
            });
            let respuesta = await response.json();
            console.log(respuesta);

            divRegion.classList.add('hidden');

        } catch (error) {
            console.log(error);
        }
    });
};

const renderLocationErrorForms = (error) => {
    if (error) {
        let errorTitle = document.createElement('h7');
        errorTitle.classList.add('red-error');
        errorTitle.textContent = error;
        //loginDiv.appendChild(errorTitle);
        addInput.appendChild(errorTitle);
    }
};

//GET countries

const getCountries = async(idRegion) => {

    const getToken = JSON.parse(localStorage.getItem('token'));

    const urlNewUser = `http://localhost:3000/api/country/${idRegion}`;

    try {
        const response = await fetch(urlNewUser, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },

        });
        let respuesta = await response.json();
        
        console.log(respuesta);
        respuesta.forEach(element => {
            let idRegion = element.ID_country;
            let nameRegion = element.name;
            renderCountry(nameRegion, idRegion);

            
        });
        
    } catch (error) {
        console.log(error);
    }
}

//---RENDER countries 
const renderCountry = (country,idCountry) => {
    let countriesconteiners = document.createElement('div');
    countriesconteiners.classList.add('countries');
    divRegion.appendChild(countriesconteiners);

    let divCountry = document.createElement('div');
    divCountry.classList.add('div-country');
    countriesconteiners.appendChild(divCountry);

    let countryNameActions = document.createElement('div');
    countryNameActions.classList.add('country-name-actions');
    divCountry.appendChild(countryNameActions);

    let h4NameCountry = document.createElement('h4');
    h4NameCountry.textContent = country;
    countryNameActions.appendChild(h4NameCountry);

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-acciones');
    btnEdit.classList.add('btn-actions');
    countryNameActions.appendChild(btnEdit);

    let iEdit = document.createElement('i');
    iEdit.classList.add('fas');
    iEdit.classList.add('fa-edit');
    btnEdit.appendChild(iEdit);

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-acciones');
    btnDelete.classList.add('btn-actions');
    countryNameActions.appendChild(btnDelete);

    let iDelete = document.createElement('i');
    iDelete.classList.add('fas');
    iDelete.classList.add('fa-trash-alt');
    btnDelete.appendChild(iDelete);

    //EDIT region
    btnEdit.addEventListener('click', () => {
        addInput.classList.remove('hidden');

        btnAddInput.addEventListener('click', async () => {
            const regionValue = inputValueAdd.value;
            const getToken = JSON.parse(localStorage.getItem('token'));
            const newRegionObject = {
                "name": regionValue
            }
            //PUT region
            const urlNewUser = `http://localhost:3000/api/country/${idCountry}`;
    
            try {
                const response = await fetch(urlNewUser, {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken}`
                    },
                    body: JSON.stringify(newRegionObject)
                });
                let respuesta = await response.json();
                console.log(respuesta);
    
                addInput.classList.add('hidden');
    
            } catch (error) {
                console.log(error);
            }
        })
    })

    //DELETE region
    btnDelete.addEventListener('click', async() => {
        const getToken = JSON.parse(localStorage.getItem('token'));
        const urlNewUser = `http://localhost:3000/api/region/${idCountry}`;

        try {
            const response = await fetch(urlNewUser, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken}`
                },
                //body: JSON.stringify(newRegionObject)
            });
            let respuesta = await response.json();
            console.log(respuesta);

            divRegion.classList.add('hidden');

        } catch (error) {
            console.log(error);
        }
    });
}