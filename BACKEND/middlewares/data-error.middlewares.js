const jwt = require('jsonwebtoken');
const { existingRegionIDSql, existingCountryIDSql, existingCityIDSql } = require('../helpers/location.helpers');
const { verifyDataSQL, verifyRoleDataSQL } = require('../helpers/users.helpers');

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
        next();
    }
};

const verifyIDRegion = async(req,res,next) => {
    try {
        const {idUser,idRegion} = req.params
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
        const {idUser,idCountry} = req.params
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
        const {idUser,idCity} = req.params
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

module.exports = {
    loginError,
    verifyToken,
    verifyRoleAdmin,
    verifyIDRegion,
    verifyIDCountry,
    verifyIDCity
}