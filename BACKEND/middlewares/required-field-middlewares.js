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
    cityIdRegionRequiredField
}