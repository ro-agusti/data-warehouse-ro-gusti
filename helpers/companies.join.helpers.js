const sequelize = require('../database/connection.database.js');

const companiesJoinSql = async() => {
    try {
        const retorno = await sequelize.query('SELECT companies.ID_company, companies.company_name, cities.name, companies.company_address, companies.company_email, companies.company_telephone FROM companies, cities WHERE companies.ID_city = cities.ID_city',
        {type: sequelize.QueryTypes.SELECT });
        console.log(retorno)
        return retorno;
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    companiesJoinSql
}