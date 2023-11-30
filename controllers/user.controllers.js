const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page, limit } = req.query;

    res.json({
        "msg": 'Get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({
        "msg": 'Post API - Controlador',
        nombre,
        edad
    })
}
const usuariosPut = (req, res = response) => {

    const params = req.query;

    res.json({
        "msg": 'Put API - Controlador',
        id
    })
}
const usuariosDelete = (req, res = response) => {

    res.json({
        "msg": 'Delete API - Controlador',
    })
}


module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,

}