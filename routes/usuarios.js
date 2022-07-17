const { Router } = require("express"); //Me traigo Router
const {  usuariosGet,
         usuariosPut, 
         usuariosPost, 
         usuariosDelete, 
         usuariosPatch } = require("../controllers/usuarios");

const router = Router(); //Acá configuro mis rutas

router.get('/', usuariosGet)  

router.put('/:id',usuariosPut)//Dos parametros /:id/:ss

router.post('/', usuariosPost)

router.delete('/', usuariosDelete )

router.patch('/', usuariosPatch)

module.exports = router;