const firstNameRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!firstName) {
        res.status(403).send({error:'firstname still to be completed'});
    } else {
        next();
    }
};

const lastNameRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!lastName) {
        res.status(403).send({error:'lastname still to be completed'});
    } else {
        next();
    }
};

const emailRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!email) {
        res.status(403).send({error:'email still to be completed'});
    } else {
        next();
    }
};

const profileRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!profile) {
        res.status(403).send({error:'profile still to be completed'});
    } else {
        next();
    }
};

const countryRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!country) {
        res.status(403).send({error:'country still to be completed'});
    } else {
        next();
    }
};

const passwordRequiredField = (req, res, next) => {
    const { firstName, lastName, email, profile, country, password } = req.body;
    if (!password) {
        res.status(403).send({error:'password still to be completed'});
    } else {
        next();
    }
};

const regionNameRequiredField = (req, res, next) => {
    const { name} = req.body;
    if (!name) {
        res.status(403).send({error:'region name still to be completed'});
    } else {
        next();
    }
};

const countryNameRequiredField = (req, res, next) => {
    const { name, ID_region } = req.body;
    if (!name) {
        res.status(403).send({error:'country name still to be completed'});
    } else {
        next();
    }
};

const countryIdRegionRequiredField = (req, res, next) => {
    const { name, ID_region } = req.body;
    if (!ID_region) {
        res.status(403).send({error:'ID_region still to be completed'});
    } else {
        next();
    }
};

const cityNameRequiredField = (req, res, next) => {
    const { name, ID_region } = req.body;
    if (!name) {
        res.status(403).send({error:'city name still to be completed'});
    } else {
        next();
    }
};

const cityIdRegionRequiredField = (req, res, next) => {
    const { name, ID_country } = req.body;
    if (!ID_country) {
        res.status(403).send({error:'ID_country still to be completed'});
    } else {
        next();
    }
};

const companyNameRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!name) {
        res.status(403).send({error:'company name still to be completed'});
    } else {
        next();
    }
};

const companyIDcityRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!ID_city) {
        res.status(403).send({error:'city ID still to be completed'});
    } else {
        next();
    }
};

const companyAddressRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!address) {
        res.status(403).send({error:'address still to be completed'});
    } else {
        next();
    }
};

const companyEmailRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!email) {
        res.status(403).send({error:'email still to be completed'});
    } else {
        next();
    }
};

const companyTelephoneRequiredField = (req, res, next) => {
    const {name, ID_city, address, email, telephone} = req.body;
    if (!telephone) {
        res.status(403).send({error:'telephone still to be completed'});
    } else {
        next();
    }
};

const contactRequiredField = (req, res, next) => {
    const {name, surname, position, email, address, interest} = req.body;
    if (!name) {
        res.status(403).send({error:'name still to be completed'});
    } else if (!surname){
        res.status(403).send({error:'surname still to be completed'});
    }else if (!position) {
        res.status(403).send({error:'position still to be completed'});
    }else if (!email) {
        res.status(403).send({error:'email still to be completed'});
    } else if (!address) {
        res.status(403).send({error:'address still to be completed'});
    } else if (!interest){
        res.status(403).send({error:'interest still to be completed'});
    }else{
        next();
    }
};

const contactTypeRequiredField = (req, res, next) => {
    const {contactType} = req.body;
    contactType.forEach((el, index) =>{
        if (!contactType[index].channel) {
            return res.status(403).send({error:'channel still to be completed'});
        } else if (!contactType[index].account){
            return res.status(403).send({error:'account still to be completed'});
        } else if (!contactType[index].preference){
            return res.status(403).send({error:'preference still to be completed'});
        }else{
            next();
        }
    })
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
    contactRequiredField,
    contactTypeRequiredField
}