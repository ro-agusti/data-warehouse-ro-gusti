const { Router } = require('express');
const router = Router();

const { postRegion, getRegions, putRegion, deleteRegion, postCountry, getCountries, putCountry, deleteCountry, postCity, getCities, putCity, deleteCity } = require('../controllers/location.controllers');
const { postLogin, postUser } = require('../controllers/users.controllers');
const { loginError, verifyToken, verifyRoleAdmin, verifyIDRegion, verifyIDCountry, verifyIDCity } = require('../middlewares/data-error.middlewares');
const { existingUser, existingRegion, existingCountry, existingCity } = require('../middlewares/existing-data.middlewares');
const { emailSyntaxError, weakPassword } = require('../middlewares/regular.expressions..middlewares');
const { firstNameRequiredField, emailRequiredField, passwordRequiredField, lastNameRequiredField, profileRequiredField, countryRequiredField, regionNameRequiredField, countryNameRequiredField, countryIdRegionRequiredField, cityNameRequiredField, cityIdRegionRequiredField } = require('../middlewares/required-field-middlewares');

//---users---
router.post('/login',
    [
        emailRequiredField,
        passwordRequiredField,
        loginError
    ],
    postLogin
);

router.post('/user/:idAdmin',
    [
        firstNameRequiredField,
        lastNameRequiredField,
        emailRequiredField,
        profileRequiredField,
        countryRequiredField,
        passwordRequiredField,
        emailSyntaxError,
        weakPassword,
        verifyToken,
        verifyRoleAdmin,
        existingUser,
    ],
    postUser
);

//---location---
//REGION
router.post('/region/:idUser',
    [
        verifyToken,
        existingRegion,
        regionNameRequiredField
    ],
    postRegion
);

router.get('/region/:idUser',
    [
        verifyToken
    ],
    getRegions
);

router.put('/region/:idUser/:idRegion',
    [
        verifyToken,
        verifyIDRegion,
        existingRegion
    ],
    putRegion
);

router.delete('/region/:idUser/:idRegion',
    [
        verifyToken,
        verifyIDRegion
    ],
    deleteRegion
);

//COUNTRY
router.post('/country/:idUser/:idRegion',
    [
        verifyToken,
        verifyIDRegion,
        countryNameRequiredField,
        countryIdRegionRequiredField,
        existingCountry
    ],
    postCountry
);

router.get('/country/:idUser/:idRegion',
    [
        verifyToken,
        verifyIDRegion
    ],
    getCountries
);

router.put('/country/:idUser/:idCountry',
    [
        verifyToken,
        verifyIDCountry,
        existingCountry
    ],
    putCountry
);

router.delete('/country/:idUser/:idCountry',
    [
        verifyToken,
        verifyIDCountry
    ],
    deleteCountry
);

//CITY
router.post('/city/:idUser/:idCountry',
    [
        verifyToken,
        verifyIDCountry,
        cityNameRequiredField,
        cityIdRegionRequiredField,
        existingCity
    ],
    postCity
);

router.get('/city/:idUser/:idCountry',
    [
        verifyToken,
        verifyIDCountry
    ],
    getCities
);

router.put('/city/:idUser/:idCity',
    [
        verifyToken,
        verifyIDCity,
        existingCity
    ], putCity
);

router.delete('/city/:idUser/:idCity',
    [
        verifyToken,
        verifyIDCity
    ],
    deleteCity
);

//---companies
router.post('/company/:idUser',
[
    verifyToken
]
);

router.get('/company/:idUser',);

router.put('/company/:idUser/:idCompany',);

router.delete('/company/:idUser/:idCompany',);

//---contacts
router.post('/contact/:idUser',);

router.get('/contact/:idUser',);

router.put('/contact/:idUser/:idContact',);

router.delete('/contact/:idUser/:idContact',);

//---contact type
router.post('/contact-type/:idUser/:idContact',);

router.get('/contact-type/:idUser/:idContact',);

router.put('/contact-type/:idUser/:idContact/:idContactType',);

router.delete('/contact-type/:idUser/:idContact/:idContactType',);

module.exports = router;