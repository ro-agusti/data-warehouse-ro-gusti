const { existingRegionSQL, existingCountrySQL, existingCitySQL} = require("../helpers/location.helpers");
const {existingEmailSQL } = require("../helpers/users.helpers");

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

module.exports = {
    existingUser,
    existingRegion,
    existingCountry,
    existingCity
}