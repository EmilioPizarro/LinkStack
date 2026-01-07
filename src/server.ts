//Import Express
//const express  = require('express') //CJS Commun -> Ya no se utiliza
import express from 'express' //ESM Ecmascript modules

//Create a express server instance
const app = express()


//routig , creacion de rutas (usando metodos http get, post , put , patch)
//callback request (Peticion) / response (Respuesta)

app.get('/',(req,res) => {
//Imprimir algo en pantalla
    res.send('Hola Mundo en Express / Typescript')
})

export default app;