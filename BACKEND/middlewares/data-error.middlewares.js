const jwt = require('jsonwebtoken');
const { existingCompanyIDSql } = require('../helpers/companies.helpers');
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
    verifyIDContacts
}