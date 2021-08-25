const sequelize = require('../database/connection.database.js');

const insertCompanySQL = async (nameBody, idCityBody, addressBody, emailBody, telephoneBody) => {
    try {     
        const retorno = await sequelize.query('INSERT INTO `companies` (`company_name`, `ID_city`, `company_address`, `company_email`, `company_telephone`) VALUES (?, ?, ?, ? ,?)',
            { replacements: [nameBody, idCityBody, addressBody, emailBody, telephoneBody], type: sequelize.QueryTypes.INSERT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectCompaniesSql = async() => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `companies`',
            {type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCompanyIDSql = async(idCompanyParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `companies` WHERE `ID_company` = ?',
            { replacements: [idCompanyParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCompanyNameSql = async(nameBody) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `companies` WHERE `name` = ?',
        { replacements: [nameBody], type: sequelize.QueryTypes.SELECT });
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingCompanyEmailSql = async(emailBody) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `companies` WHERE `email` = ?',
        { replacements: [emailBody], type: sequelize.QueryTypes.SELECT });
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateCampanySql = async(idCityBody, addressBody, emailBody, telephoneBody, idCompanyParams) => {
    try {
        const retorno = await sequelize.query('UPDATE `companies` SET `ID_city` = ?, `address`= ?, `email` =?, `telephone` =? WHERE `ID_company`= ?',
            { replacements: [idCityBody, addressBody, emailBody, telephoneBody, idCompanyParams], type: sequelize.QueryTypes.UPDATE });
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteCompanySql = async(idCompanyParams) => {
    try {
        const retorno = await sequelize.query('DELETE FROM `companies` WHERE `ID_company` = ?',
        {replacements:[idCompanyParams], type:sequelize.QueryTypes.DELETE})
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    insertCompanySQL,
    selectCompaniesSql,
    existingCompanyIDSql,
    existingCompanyNameSql,
    existingCompanyEmailSql,
    updateCampanySql,
    deleteCompanySql
}