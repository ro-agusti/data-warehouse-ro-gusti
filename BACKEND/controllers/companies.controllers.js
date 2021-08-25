const { insertCompanySQL, selectCompaniesSql, updateCampanySql, deleteCompanySql } = require("../helpers/companies.helpers");
const { companiesJoinSql } = require("../helpers/companies.join.helpers");

const postCompany = async(req,res) => {
    try {
        const {name, ID_city, address, email, telephone} = req.body;
        await insertCompanySQL(name, ID_city, address, email, telephone);
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
        
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCompanies = async(req,res) => {
    try {
        const sqlHelpers = await companiesJoinSql();
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const putCompany = async(req,res) => {
    try {
        const {idCompany} = req.params;
        const { ID_city, address, email, telephone} = req.body;
        await updateCampanySql(ID_city, address, email, telephone, idCompany);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteCompany = async(req,res) => {
    try {
        const {idCompany} = req.params
        await deleteCompanySql(idCompany);
        respuesta = {
            mensaje: 'company removed'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    postCompany,
    getCompanies,
    putCompany,
    deleteCompany
}