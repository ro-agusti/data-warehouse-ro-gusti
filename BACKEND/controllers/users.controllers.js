const jwt = require('jsonwebtoken');
const { verifyDataSQL, insertUserSQL } = require('../helpers/users.helpers');

const postLogin = async(req,res) => {
    try {
        const {email, password} = req.body;
        const confirmed = await verifyDataSQL(email, password);
        //console.log(confirmed)
        const signedObject = {
            id:confirmed[0].ID_user,
            email:confirmed[0].email,
            role:confirmed[0].role
        }
        const token = jwt.sign(signedObject, process.env.SECRET);
        respuesta = {
            mensaje: 'successful sign in',
            respuesta: token
        };
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

const postUser = async(req,res) => {
    try {
        await insertUserSQL(req.body);
        respuesta = {
            mensaje: 'successful sign up'
        }
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    postLogin,
    postUser
}