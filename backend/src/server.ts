
//Importo y configuro las variables de entorno
 
//Import Express
//const express  = require('express') //CJS Commun -> Ya no se utiliza
import express from 'express' //ESM Ecmascript modules
import 'dotenv/config'
import cors from 'cors'
import router from './router.js'
//Importo el metodo de conexion a la bd
import {connectDB} from './config/db.js'
import { corsConfig } from './config/cors.js'
//Ejecuto la conexion a la bd
connectDB()
 

//Create a express server instance
const app = express()
//cors
app.use(cors(corsConfig))

//Leer datos de formularios -- Middleware a nivel global (app)
app.use(express.json())

//Buscara que nombre de ruta de router cumplira
//Cada vez que hay una peticion a la url principal ('/'), se ejecuta la funcion router que entrara a las rutas
app.use('/',router)

export default app