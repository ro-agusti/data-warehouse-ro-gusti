const { insertRegionSQL, selectRegionsSql, updateRegionSql, deleteRegionSql, insertCountrySql, selectCountriesByRegionSql, updateCountrySql, deleteCountrySql, insertCitySql, selectCitiesByCountrySql, updateCitySql, deleteCitySql } = require("../helpers/location.helpers");

//---regions
const postRegion = async(req,res) => {
    try {
        const {name} = req.body;
        await insertRegionSQL(req.body);
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getRegions = async(req,res) => {
    try {
        const sqlHelpers = await selectRegionsSql();
        respuesta = sqlHelpers
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const putRegion = async(req,res) => {
    try {
        const {name} = req.body;
        const {idUser, idRegion} = req.params;
        await updateRegionSql(name, idRegion);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteRegion = async(req,res) => {
    try {
        const {idUser, idRegion} = req.params;
        await deleteRegionSql(idRegion);
        respuesta = {
            mensaje: 'region removed'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

//---countries
const postCountry = async(req,res) => {
    try {
        const {name, ID_region} = req.body;
        await insertCountrySql(name, ID_region)
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCountries = async(req,res) => {
    try {
        const {idUser, idRegion} = req.params;
        const sqlHelpers = await selectCountriesByRegionSql(idRegion);
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const putCountry = async(req,res) => {
    try {
        const {name} = req.body;
        const {idUser, idCountry} = req.params;
        await updateCountrySql(name, idCountry);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteCountry = async(req,res) => {
    try {
        const {idUser, idCountry} = req.params;
        await deleteCountrySql(idCountry);
        respuesta = {
            mensaje: 'country removed'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

//cities
const postCity = async(req,res) => {
    try {
        const {name, ID_country} = req.body;
        await insertCitySql(name, ID_country)
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCities = async(req,res) => {
    try {
        const {idUser, idCountry} = req.params;
        const sqlHelpers = await selectCitiesByCountrySql(idCountry);
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const putCity = async(req,res) => {
    try {
        const {name} = req.body;
        const {idUser, idCity} = req.params;
        await updateCitySql(name, idCity);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteCity = async(req,res) => {
    try {
        const {idUser, idCity} = req.params;
        await deleteCitySql(idCity);
        respuesta = {
            mensaje: 'city removed'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    postRegion,
    getRegions,
    putRegion,
    deleteRegion,
    postCountry,
    getCountries,
    putCountry,
    deleteCountry,
    postCity,
    getCities,
    putCity,
    deleteCity
}