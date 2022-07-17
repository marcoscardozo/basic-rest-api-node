const { response } = require("express");

const usuariosGet = (req, res = response) => {
    // const {q, nombre, apikey} = req.query; para la query

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey
    })
}

const usuariosPost = (req, res = response) => {
    // const body = req.body;
    const { nombre, edad } = req.body;
    res.json({
        msg: "post API - controlador",
        // body: body
        nombre: nombre,
        edad: edad
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controlador"
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    })
}
const usuariosPut = (req, res = response) => {
    const id = req.params.id; //Extraigo el id del req del url

    res.json({
        msg: "put API - controlador",
        id: parseInt(id)
    })
}

module.exports = {
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosGet
}