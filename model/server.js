const express = require('express')
var cors = require('cors')
require("dotenv").config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }
    middlewares() { //Lo que primero se lanza
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body. Lo que viene del post, put, delete lo va a intentar serializar a json
        this.app.use(express.json())

        // Directorio publico
        // this.app.use("/", (req,res, next)=>{console.log("sdsd");next()})
        this.app.use(express.static("public"))

    }

    routes() { //Todas mis rutas de la aplicacion
        this.app.use(this.usuariosPath, require("../routes/usuarios"))
    }
    listen() {
        this.app.listen(this.port)
    }
}
module.exports = Server;