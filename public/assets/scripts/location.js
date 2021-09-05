locationMenu.addEventListener('click', () => {
    contactMenu.classList.remove('li-selected');
    usersMenu.classList.remove('li-selected');
    locationMenu.classList.add('li-selected');
    banner.classList.add('hidden');
    contactBoard.classList.add('hidden');
    newUser.classList.add('hidden');
    locationSection.classList.remove('hidden')
    getRegion();
});

//--- GET/PUT/DELETE region
const getRegion = async () => {
    const getToken = JSON.parse(localStorage.getItem('token'));

    const urlNewUser = 'http://localhost:3000/api/region';

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
            let idRegion = element.ID_region;
            let nameRegion = element.name;
            renderRegion(nameRegion, idRegion);

            getCountries(idRegion);

        });
        
    } catch (error) {
        console.log(error);
    }
}

//--- POST region
btnAddRegion.addEventListener('click', () => {
    addInput.classList.remove('hidden');
    
    btnAddInput.addEventListener('click', async () => {
        const regionValue = inputValueAdd.value;
        const getToken = JSON.parse(localStorage.getItem('token'));
        const newRegionObject = {
            "name": regionValue
        }
        //POST region
        const urlNewUser = 'http://localhost:3000/api/region';
        
        try {
            const response = await fetch(urlNewUser, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken}`
                },
                body: JSON.stringify(newRegionObject)
            });
            let respuesta = await response.json();
            
            let errorAnswer = respuesta.error
            renderLocationErrorForms(errorAnswer);
            
            //addInput.classList.add('hidden');
            
        } catch (error) {
            console.log(error);
        }
    })
});

//GET/PUT/DELETE country

