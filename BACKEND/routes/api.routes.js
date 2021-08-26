const { Router } = require('express');
const router = Router();

//---IMPORTS
const { postCompany, getCompanies, putCompany, deleteCompany } = require('../controllers/companies.controllers');
const { postContact, getContacts, getContactsByCompany, putContact } = require('../controllers/contacts.controllers');
const { postRegion, getRegions, putRegion, deleteRegion, postCountry, getCountries, putCountry, deleteCountry, postCity, getCities, putCity, deleteCity } = require('../controllers/location.controllers');
const { postLogin, postUser } = require('../controllers/users.controllers');
const { loginError, verifyToken, verifyRoleAdmin, verifyIDRegion, verifyIDCountry, verifyIDCity, verifyIDCityBody, verifyIDCompany, verifyInterest, verifyIDCompanyInContacts, verifyIDContacts } = require('../middlewares/data-error.middlewares');
const { existingUser, existingRegion, existingCountry, existingCity, existingCompanyData, existingContactData } = require('../middlewares/existing-data.middlewares');
const { emailSyntaxError, weakPassword } = require('../middlewares/regular.expressions..middlewares');
const { firstNameRequiredField, emailRequiredField, passwordRequiredField, lastNameRequiredField, profileRequiredField, countryRequiredField, regionNameRequiredField, countryNameRequiredField, countryIdRegionRequiredField, cityNameRequiredField, cityIdRegionRequiredField, companyNameRequiredField, companyIDcityRequiredField, companyAddressRequiredField, companyEmailRequiredField, companyTelephoneRequiredField, contactRequiredField } = require('../middlewares/required-field-middlewares');

//---users---
router.post('/login',
    [
        emailRequiredField,
        passwordRequiredField,
        loginError
    ],
    postLogin
);

router.post('/user',
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
router.post('/region',
    [
        verifyToken,
        existingRegion,
        regionNameRequiredField
    ],
    postRegion
);

router.get('/region',
    [
        verifyToken
    ],
    getRegions
);

router.put('/region/:idRegion',
    [
        verifyToken,
        verifyIDRegion,
        existingRegion
    ],
    putRegion
);

router.delete('/region/:idRegion',
    [
        verifyToken,
        verifyIDRegion
    ],
    deleteRegion
);

//COUNTRY
router.post('/country/:idRegion',
    [
        verifyToken,
        verifyIDRegion,
        countryNameRequiredField,
        countryIdRegionRequiredField,
        existingCountry
    ],
    postCountry
);

router.get('/country/:idRegion',
    [
        verifyToken,
        verifyIDRegion
    ],
    getCountries
);

router.put('/country/:idCountry',
    [
        verifyToken,
        verifyIDCountry,
        existingCountry
    ],
    putCountry
);

router.delete('/country/:idCountry',
    [
        verifyToken,
        verifyIDCountry
    ],
    deleteCountry
);

//CITY
router.post('/city/:idCountry',
    [
        verifyToken,
        verifyIDCountry,
        cityNameRequiredField,
        cityIdRegionRequiredField,
        existingCity
    ],
    postCity
);

router.get('/city/:idCountry',
    [
        verifyToken,
        verifyIDCountry
    ],
    getCities
);

router.put('/city/:idCity',
    [
        verifyToken,
        verifyIDCity,
        existingCity
    ], putCity
);

router.delete('/city/:idCity',
    [
        verifyToken,
        verifyIDCity
    ],
    deleteCity
);

//---companies
router.post('/company',
    [
        verifyToken,
        companyNameRequiredField,
        companyIDcityRequiredField,
        companyAddressRequiredField,
        companyEmailRequiredField,
        companyTelephoneRequiredField,
        emailSyntaxError,
        verifyIDCityBody,
        existingCompanyData
    ],
    postCompany
);

router.get('/company',
    [
        verifyToken
    ],
    getCompanies
);

router.put('/company/:idCompany',
    [
        verifyToken,
        verifyIDCompany,
        emailSyntaxError,
        verifyIDCityBody
    ],
    putCompany
);

router.delete('/company/:idCompany',
    [
        verifyToken,
        verifyIDCompany
    ],
    deleteCompany
);

//---contacts
router.post('/contact/:idCompany',
    [
        verifyToken,
        verifyIDCompany,
        contactRequiredField,
        emailSyntaxError,
        verifyInterest,
        existingContactData
    ],
    postContact
);

router.get('/contact',
    [
        verifyToken
    ],
    getContacts
);

router.get('/contact/:idCompany',
    [
        verifyToken,
        verifyIDCompanyInContacts
    ],
    getContactsByCompany
)

router.put('/contact/:idContact',
    [
        verifyToken,
        verifyIDContacts,
        emailSyntaxError
    ],
    putContact
);

router.delete('/contact/:idContact',);

//---contact type
router.post('/contact-type/:idContact',);

router.get('/contact-type/:idContact',);

router.put('/contact-type/:idContact/:idContactType',);

router.delete('/contact-type/:idContact/:idContactType',);

module.exports = router;