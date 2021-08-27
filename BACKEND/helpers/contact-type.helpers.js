const sequelize = require('../database/connection.database.js');

const insertContactTypeSql = async(contactType, idContactParams) => {
    try {     
        contactType.forEach(async (el, index)=>{
            await sequelize.query('INSERT INTO `contacts_type` (`contacts_type`.`channel`, `contacts_type`.`account`, `contacts_type`.`preferences`, `contacts_type`.`ID_contact`) VALUES (?,?,?,?)',
                { replacements: [contactType[index].channel, contactType[index].account, contactType[index].preference, idContactParams], type: sequelize.QueryTypes.INSERT })
        })
        const contact_type = {
            ...contactType
        }
        return contact_type;
    } catch (error) {
        res.status(500).send(error);
    }
};

const selectContactTypeSql = async(idContactParams) => {
    try {
        const retorno = await sequelize.query('SELECT contacts_type.ID_contact_type, contacts.contact_first_name, contacts.contact_last_name , contacts_type.channel, contacts_type.account, contacts_type.preferences FROM contacts_type, contacts WHERE contacts_type.ID_contact = contacts.ID_contact AND contacts.ID_contact = ?',
        { replacements: [idContactParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingContactTypeIDSql = async(idContactTypeParams) => {
    try {
        const retorno = await sequelize.query('SELECT * FROM `contacts_type` WHERE `ID_contact_type` = ?',
            { replacements: [idContactTypeParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateContactTypeSql = async(channelBody, accountBody, preferenceBody, idContactTypeParams) => {
    try {
        const retorno = await sequelize.query('UPDATE `contacts_type` SET `channel` = ?, `account`= ?, `preferences` =? WHERE `ID_contact_type`= ?',
            { replacements: [channelBody, accountBody, preferenceBody, idContactTypeParams], type: sequelize.QueryTypes.UPDATE });
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteContactTypeSql = async(idContactTypeParams) => {
    try {
        const retorno = await sequelize.query('DELETE FROM `contacts_type` WHERE `ID_contact_type` = ?',
        {replacements:[idContactTypeParams], type:sequelize.QueryTypes.DELETE})
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    insertContactTypeSql,
    selectContactTypeSql,
    existingContactTypeIDSql,
    updateContactTypeSql,
    deleteContactTypeSql
}