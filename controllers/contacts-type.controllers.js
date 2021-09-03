const { insertContactTypeSql, selectContactTypeSql, updateContactTypeSql, deleteContactTypeSql } = require("../helpers/contact-type.helpers");

const postContactType = async(req,res) => {
    try {
        const {idContact} = req.params;
        const {contactType} = req.body;
        await insertContactTypeSql(contactType, idContact);
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getContactType = async(req,res) => {
    try {
        const {idContact} = req.params;
        const sqlHelpers = await selectContactTypeSql(idContact);
        respuesta = {
            mensaje: sqlHelpers
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const putContactType = async(req,res) => {
    try {
        const {idContact, idContactType} = req.params;
        const {channel, account, preference} = req.body;
        await updateContactTypeSql(channel, account, preference, idContactType);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteContactType = async(req, res) => {
    try {
        const {idContact, idContactType} = req.params;
        await deleteContactTypeSql(idContactType);
        respuesta = {
            mensaje: 'successful modification'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports= {
    postContactType,
    getContactType,
    putContactType,
    deleteContactType
}