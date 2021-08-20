const sequelize = require('../database/connection.database.js')

const existingRegionSQL = async(bodyUsername) => {
    try {   
        const retorno = await sequelize.query('SELECT * FROM `regions` WHERE `name` = :name',
            { replacements: bodyUsername, type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCountrySQL = async(bodyUsername) => {
    try {   
        const retorno = await sequelize.query('SELECT * FROM `countries` WHERE `name` = :name',
            { replacements: bodyUsername, type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCitySQL = async(bodyUsername) => {
    try {   
        const retorno = await sequelize.query('SELECT * FROM `cities` WHERE `name` = :name',
            { replacements: bodyUsername, type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const insertRegionSQL = async (objectBody) => {
    try {     
        const retorno = await sequelize.query('INSERT INTO `regions` (`name`) VALUES (:name)',
            { replacements: objectBody, type: sequelize.QueryTypes.INSERT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectRegionsSql = async() => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `regions`',
            {type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingRegionIDSql = async(idRegionParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `regions` WHERE `ID_region` = ?',
            { replacements: [idRegionParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateRegionSql = async(nameBody, idParams) => {
    try {
        const retorno = await sequelize.query('UPDATE `regions` SET `name` = ? WHERE `ID_region`= ?',
                { replacements: [nameBody, idParams], type: sequelize.QueryTypes.UPDATE });
            return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteRegionSql = async(idParams) => {
    try {
        const retorno = await sequelize.query('DELETE FROM `regions` WHERE `ID_region` = ?',
        {replacements:[idParams], type:sequelize.QueryTypes.DELETE});
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const insertCountrySql = async(nameBody, idRegionBody) => {
    try {     
        const retorno = await sequelize.query('INSERT INTO `countries` (`name`, `ID_region`) VALUES (?, ?)',
            { replacements: [nameBody, idRegionBody], type: sequelize.QueryTypes.INSERT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectCountriesByRegionSql = async(idRegionParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `countries` WHERE `ID_region` = ?',
            {replacements: [idRegionParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCountryIDSql = async(idRegionParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `countries` WHERE `ID_country` = ?',
            { replacements: [idRegionParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateCountrySql = async(nameBody, idParams) => {
    try {
        const retorno = await sequelize.query('UPDATE `countries` SET `name` = ? WHERE `ID_country`= ?',
                { replacements: [nameBody, idParams], type: sequelize.QueryTypes.UPDATE });
            return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteCountrySql = async(idParams) => {
    try {
        const retorno = await sequelize.query('DELETE FROM `countries` WHERE `ID_country` = ?',
        {replacements:[idParams], type:sequelize.QueryTypes.DELETE});
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const insertCitySql = async(nameBody, idCountryBody) => {
    try {     
        const retorno = await sequelize.query('INSERT INTO `cities` (`name`, `ID_country`) VALUES (?, ?)',
            { replacements: [nameBody, idCountryBody], type: sequelize.QueryTypes.INSERT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectCitiesByCountrySql = async(idCountryParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `cities` WHERE `ID_country` = ?',
            {replacements: [idCountryParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCityIDSql = async(idCityParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `cities` WHERE `ID_city` = ?',
            { replacements: [idCityParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateCitySql = async(nameBody, idParams) => {
    try {
        const retorno = await sequelize.query('UPDATE `cities` SET `name` = ? WHERE `ID_city`= ?',
                { replacements: [nameBody, idParams], type: sequelize.QueryTypes.UPDATE });
            return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteCitySql = async(idParams) => {
    try {
        const retorno = await sequelize.query('DELETE FROM `cities` WHERE `ID_city` = ?',
        {replacements:[idParams], type:sequelize.QueryTypes.DELETE});
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    existingRegionSQL,
    existingCountrySQL,
    existingCitySQL,
    insertRegionSQL,
    selectRegionsSql,
    existingRegionIDSql,
    updateRegionSql,
    deleteRegionSql,
    insertCountrySql,
    selectCountriesByRegionSql,
    existingCountryIDSql,
    updateCountrySql,
    deleteCountrySql,
    insertCitySql,
    selectCitiesByCountrySql,
    existingCityIDSql,
    updateCitySql,
    deleteCitySql
}