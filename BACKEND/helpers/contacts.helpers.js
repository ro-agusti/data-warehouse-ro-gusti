const sequelize = require('../database/connection.database.js');


const insertContactSql = async(nameBody, surnameBody, positionBody, emailBody, addressBody, idCompanyParams, interestBody) => {
    try {     
        const retorno = await sequelize.query('INSERT INTO `contacts` (`contact_first_name`, `contact_last_name`, `contact_position`, `contact_email`, `contact_address`, `ID_company`, `contact_interest`) VALUES (?, ?, ?, ? ,?, ?, ?)',
            { replacements: [nameBody, surnameBody,positionBody, emailBody, addressBody, idCompanyParams, interestBody], type: sequelize.QueryTypes.INSERT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingEmailContactSql = async(emailBody) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `contacts` WHERE `contact_email` = ?',
            { replacements: [emailBody], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingNameAndSurnameContactSql = async(nameBody, surnameBody) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `contacts` WHERE `contact_first_name` = ? AND `contact_last_name` = ?',
            { replacements: [nameBody, surnameBody], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectContactsSql = async() => {
    try {
        const retorno = await sequelize.query('SELECT contacts.contact_first_name, contacts.contact_last_name, contacts.contact_position, contacts.contact_email, contacts.contact_address, companies.company_name, contacts.contact_interest FROM contacts, companies WHERE contacts.ID_company = companies.ID_company',
            { type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectContactsByCompanySql = async(idCompanyParams) => {
    try {
        const retorno = await sequelize.query('SELECT contacts.contact_first_name, contacts.contact_last_name, contacts.contact_position, contacts.contact_email, contacts.contact_address, companies.company_name, contacts.contact_interest FROM contacts, companies WHERE contacts.ID_company = companies.ID_company AND companies.ID_company = ?',
            { replacements: [idCompanyParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingIdCompanyInContactSql = async(emailBody) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `contacts` WHERE `ID_company` = ?',
            { replacements: [emailBody], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingContactSql = async(idContactParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `contacts` WHERE `ID_contact` = ?',
        { replacements: [idContactParams], type: sequelize.QueryTypes.SELECT });
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateContactSql = async( positionBody, emailBody, addressBody, interestBody, idContactParams) => {
    try {
        const retorno = await sequelize.query('UPDATE `contacts` SET `contact_position` = ?, `contact_email`= ?, `contact_address` =?, `contact_interest` =? WHERE `ID_contact`= ?',
            { replacements: [positionBody, emailBody, addressBody, interestBody, idContactParams], type: sequelize.QueryTypes.UPDATE });
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteContactSql = async(idConactParams) => {
    try {
        const retorno = await sequelize.query('DELETE FROM `contacts` WHERE `ID_contact` = ?',
        {replacements:[idConactParams], type:sequelize.QueryTypes.DELETE})
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    insertContactSql,
    existingEmailContactSql,
    existingNameAndSurnameContactSql,
    selectContactsSql,
    selectContactsByCompanySql,
    existingIdCompanyInContactSql,
    existingContactSql,
    updateContactSql,
    deleteContactSql
}