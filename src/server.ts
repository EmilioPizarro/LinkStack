//Import Express
//const express  = require('express') //CJS Commun -> Ya no se utiliza
import express from 'express' //ESM Ecmascript modules
import router from './router.js'
//Importo el metodo de conexion a la bd
import {connectDB} from './config/db.js'

//Create a express server instance
const app = express()
//Ejecuto la conexion
connectDB()

//Leer datos de formularios
app.use(express.json())

//Buscara que nombre de ruta de router cumplira
//Cada vez que hay una peticion a la url principal ('/'), se ejecuta la funcion router que entrara a las rutas
app.use('/',router)

export default app