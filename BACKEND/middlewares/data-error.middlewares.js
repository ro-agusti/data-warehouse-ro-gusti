const jwt = require('jsonwebtoken');
const { existingCompanyIDSql } = require('../helpers/companies.helpers');
const { existingContactTypeIDSql } = require('../helpers/contact-type.helpers');
const { existingIdCompanyInContactSql, existingContactSql } = require('../helpers/contacts.helpers');
const { existingRegionIDSql, existingCountryIDSql, existingCityIDSql } = require('../helpers/location.helpers');
const { verifyDataSQL, verifyRoleDataSQL } = require('../helpers/users.helpers');

//---user
const loginError = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const confirmed = await verifyDataSQL(email, password)
        if (confirmed.length > 0) {
            next();
        } else {
            res.status(403).send('wrong data');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
 
//---general
const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send('you need a token');
    }
    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send('you need a token');
    }
    jwt.verify(token, process.env.SECRET, (error) => {
        if (error) {
            return res.status(401).send('invalid token');
        } else {
            next();
        }
    })
};

const verifyRoleAdmin = (req,res,next) => {
    let { authorization } = req.headers;
    const tokenSended = authorization.split(' ')[1]
    const jwtDecode = jwt.decode(tokenSended, process.env.SECRET);
    if (jwtDecode.role !== 'ADMIN') {
        return res.status(401).send('unauthorized user');
    } else {
        req.admin= jwtDecode
        next();
    }
};

//---location
const verifyIDRegion = async(req,res,next) => {
    try {
        const {idRegion} = req.params
        const confirmed = await existingRegionIDSql(idRegion);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong region ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyIDCountry = async(req,res,next) => {
    try {
        const {idCountry} = req.params
        const confirmed = await existingCountryIDSql(idCountry);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong country ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyIDCity = async(req,res,next) => {
    try {
        const {idCity} = req.params
        const confirmed = await existingCityIDSql(idCity);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong city ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyIDCityBody = async(req,res,next) => {
    try {
        const {name, ID_city, address, email, telephone} = req.body;
        const confirmed = await existingCityIDSql(ID_city);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong city ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyIDCompany = async(req,res,next) => {
    try {
        const {idCompany} = req.params;
        const confirmed = await existingCompanyIDSql(idCompany);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong company ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyInterest = (req,res,next) => {
    const {name, surname, position, email, address, interest} = req.body;
    if (interest == '0'){
        next();
    } else if (interest == '25') {
        next();  
    } else if (interest == '50') {
        next();
    }else if (interest == '75') {
        next();
    } else if (interest == '100') {
        next();
    } else {     
        return res.status(401).send('level of interest is worng');
    }
};

const verifyIDCompanyInContacts = async(req,res,next) => {
    try {
        const {idCompany} = req.params;
        const confirmed = await existingIdCompanyInContactSql(idCompany);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong company ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyIDContacts = async(req,res,next) => {
    try {
        const {idContact} = req.params;
        const confirmed = await existingContactSql(idContact);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong contact ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyChannel = (req,res,next) => {
    let {contactType} = req.body;
    contactType.forEach((el, index) => {
        if (contactType[index].channel = 'INSTAGRAM') {
            next();  
        } else if (contactType[index].channel = 'FACEBOOK') {
            next();
        }else if (contactType[index].channel = 'WHATSAPP') {
            next();
        } else if (contactType[index].channel = 'TWITTER') {
            next();
        } else if (contactType[index].channel = 'EMAIL'){ 
            next();    
        }else {
            return res.status(401).send('wrong communication channel');
        }
    })
};

const verifyPreference = (req,res,next) => {
    let {contactType} = req.body;
    contactType.forEach((el, index) => {
        if (contactType[index].preference == 'NO MOLESTAR') {
            next();  
        } else if (contactType[index].preference == 'FAVORITO') {
            next();
        }else {
            return res.status(401).send('wrong preference channel');
        }
    })
};

const verifyIDContactType = async(req,res,next) => {
    try {
        const { idContact, idContactType} = req.params;
        const confirmed = await existingContactTypeIDSql(idContactType);
        if (confirmed.length >0) {
            next();
        } else {
            res.status(403).send('wrong contact type ID');
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyChannelObject = (req, res, next) => {
    let {channel, account, preference} = req.body;
    if (channel = 'INSTAGRAM') {
        next();  
    } else if (channel = 'FACEBOOK') {
        next();
    }else if (channel = 'WHATSAPP') {
        next();
    } else if (channel = 'TWITTER') {
        next();
    } else if (channel = 'EMAIL'){ 
        next();    
    }else {
        return res.status(401).send('wrong communication channel');
    }
};

const verifyPreferenceObject = (req,res,next) => {
    let {channel, account, preference} = req.body;
    if (preference == 'NO MOLESTAR') {
        next();  
    } else if (preference == 'FAVORITO') {
        next();
    }else {
        return res.status(401).send('wrong preference channel');
    }
}

module.exports = {
    loginError,
    verifyToken,
    verifyRoleAdmin,
    verifyIDRegion,
    verifyIDCountry,
    verifyIDCity,
    verifyIDCityBody,
    verifyIDCompany,
    verifyInterest,
    verifyIDCompanyInContacts,
    verifyIDContacts,
    verifyChannel,
    verifyPreference,
    verifyIDContactType,
    verifyChannelObject,
    verifyPreferenceObject
}