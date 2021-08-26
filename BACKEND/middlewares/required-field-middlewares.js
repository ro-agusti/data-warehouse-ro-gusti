const firstNameRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!firstName) {
        res.status(403).send('firstname still to be completed');
    } else {
        next();
    }
};

const lastNameRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!lastName) {
        res.status(403).send('lastname still to be completed');
    } else {
        next();
    }
};

const emailRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!email) {
        res.status(403).send('email still to be completed');
    } else {
        next();
    }
};

const profileRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!profile) {
        res.status(403).send('profile still to be completed');
    } else {
        next();
    }
};

const countryRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!country) {
        res.status(403).send('country still to be completed');
    } else {
        next();
    }
};

const passwordRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!password) {
        res.status(403).send('password still to be completed');
    } else {
        next();
    }
};

const regionNameRequiredField = (req, res, next) => {
    const { name} = req.body;
    if (!name) {
        res.status(403).send('region name still to be completed');
    } else {
        next();
    }
};

const countryNameRequiredField = (req, res, next) => {
    const { name, ID_region } = req.body;
    if (!name) {
        res.status(403).send('country name still to be completed');
    } else {
        next();
    }
};

const countryIdRegionRequiredField = (req, res, next) => {
    const { name, ID_region } = req.body;
    if (!ID_region) {
        res.status(403).send('ID_region still to be completed');
    } else {
        next();
    }
};

const cityNameRequiredField = (req, res, next) => {
    const { name, ID_region } = req.body;
    if (!name) {
        res.status(403).send('city name still to be completed');
    } else {
        next();
    }
};

const cityIdRegionRequiredField = (req, res, next) => {
    const { name, ID_country } = req.body;
    if (!ID_country) {
        res.status(403).send('ID_country still to be completed');
    } else {
        next();
    }
};

const companyNameRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!name) {
        res.status(403).send('company name still to be completed');
    } else {
        next();
    }
};

const companyIDcityRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!ID_city) {
        res.status(403).send('city ID still to be completed');
    } else {
        next();
    }
};

const companyAddressRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!address) {
        res.status(403).send('address still to be completed');
    } else {
        next();
    }
};

const companyEmailRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!email) {
        res.status(403).send('email still to be completed');
    } else {
        next();
    }
};

const companyTelephoneRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!telephone) {
        res.status(403).send('telephone still to be completed');
    } else {
        next();
    }
};

const contactRequiredField = (req, res, next) => {
    const {name, surname, position, email, address, interest} = req.body;
    if (!name) {
        res.status(403).send('name still to be completed');
    } else if (!surname){
        res.status(403).send('surname still to be completed');
    }else if (!position) {
        res.status(403).send('position still to be completed');
    }else if (!email) {
        res.status(403).send('email still to be completed');
    } else if (!address) {
        res.status(403).send('address still to be completed');
    } else if (!interest){
        res.status(403).send('interest still to be completed');
    }else{
        next();
    }
};

module.exports = {
    firstNameRequiredField,
    lastNameRequiredField,
    emailRequiredField,
    profileRequiredField,
    countryRequiredField,
    passwordRequiredField,
    regionNameRequiredField,
    countryNameRequiredField,
    countryIdRegionRequiredField,
    cityNameRequiredField,
    cityIdRegionRequiredField,
    companyNameRequiredField,
    companyIDcityRequiredField,
    companyAddressRequiredField,
    companyEmailRequiredField,
    companyTelephoneRequiredField,
    contactRequiredField
}