const sequelize = require('../database/connection.database.js');

const verifyDataSQL = async (emailBody, passwordBody) => {
    try {  
        const retorno = await sequelize.query('SELECT * FROM `users` WHERE `email` = ? AND `password`= ?',
            { replacements: [emailBody, passwordBody], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const verifyRoleDataSQL = async (idParams) => {
    try {
        const retorno = await sequelize.query('SELECT role FROM users WHERE ID_user = ? ',
            { replacements: [idParams], type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const insertUserSQL = async (objectBody) => {
    try {     
        const retorno = await sequelize.query('INSERT INTO `users` (`first_name`, `last_name`, `email`, `country`, `profile`, `password`) VALUES (:firstName, :lastName, :email, :country, :profile, :password)',
            { replacements: objectBody, type: sequelize.QueryTypes.INSERT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

const existingEmailSQL = async (bodyUsername) => {
    try {   
        const retorno = await sequelize.query('SELECT * FROM `users` WHERE `email` = :email',
            { replacements: bodyUsername, type: sequelize.QueryTypes.SELECT })
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    verifyDataSQL,
    verifyRoleDataSQL,
    insertUserSQL,
    existingEmailSQL
}