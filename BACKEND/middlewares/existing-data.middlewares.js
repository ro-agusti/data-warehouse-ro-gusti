const { existingCompanyNameSql, existingCompanyEmailSql } = require("../helpers/companies.helpers");
const { existingRegionSQL, existingCountrySQL, existingCitySQL} = require("../helpers/location.helpers");
const {existingEmailSQL } = require("../helpers/users.helpers");

//---user
const existingUser = async(req,res,next) => { 
    try {
        const confirmed = await existingEmailSQL(req.body)
        if (confirmed.length >0) {
            res.status(403).send('Existing email, change it to another one');
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

//---location
const existingRegion = async(req,res,next) => { 
    try {
        const confirmed = await existingRegionSQL(req.body)
        if (confirmed.length >0) {
            res.status(403).send('Existing region, change it to another one');
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCountry = async(req,res,next) => { 
    try {
        const confirmed = await existingCountrySQL(req.body)
        if (confirmed.length >0) {
            res.status(403).send('Existing country, change it to another one');
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCity = async(req,res,next) => { 
    try {
        const confirmed = await existingCitySQL(req.body)
        if (confirmed.length >0) {
            res.status(403).send('Existing city, change it to another one');
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCompanyData = async(req,res,next) => {
    try {
        const {name, ID_city, address, email, telephone} = req.body;
        const confirmedName = await existingCompanyNameSql(name);
        const confirmedEmail = await existingCompanyEmailSql(email);
        if (confirmedName.length > 0) {
            res.status(403).send('Existing company name, change it to another one');
        } else if (confirmedEmail.length > 0 ){
            res.status(403).send('Existing company email, change it to another one');
        }else {
            next();
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    existingUser,
    existingRegion,
    existingCountry,
    existingCity,
    existingCompanyData
}