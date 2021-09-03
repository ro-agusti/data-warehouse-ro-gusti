const { insertContactSql, selectContactsSql, selectContactsByCompanySql, updateContactSql, deleteContactSql, selectContactsByInterestSql } = require("../helpers/contacts.helpers");

const postContact = async(req,res) => {
    try {
        const {idCompany} = req.params;
        const {name, surname, position, email, address, interest} = req.body;
        await insertContactSql(name, surname, position, email, address, idCompany, interest);
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getContacts = async(req,res) => {
    try {
        const sqlHelpers= await selectContactsSql();
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getContactsByCompany = async(req,res) => {
    try {
        const {idCompany} = req.params
        const sqlHelpers= await selectContactsByCompanySql(idCompany);
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getContactsByInterest = async(req,res) => {
    try {
        const {interest} = req.params
        const sqlHelpers= await selectContactsByInterestSql(interest);
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const putContact = async(req,res) => {
    try {
        const {idContact} = req.params;
        const { position, email, address, interest} = req.body;
        await updateContactSql(position, email, address, interest, idContact);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteContact = async(req,res) => {
    try {
        const {idContact} = req.params
        await deleteContactSql(idContact);
        respuesta = {
            mensaje: 'contact removed'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports= {
    postContact,
    getContacts,
    getContactsByCompany,
    getContactsByInterest,
    putContact,
    deleteContact
}