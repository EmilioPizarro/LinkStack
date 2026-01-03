//Import Express
//const express  = require('express') //CJS Commun -> Ya no se utiliza

import express from 'express' //ESM Ecmascript modules

//Create a express server instance
const app = express()


//routig , creacion de rutas (usando metodos http get, post , put , patch)
//callback request (Peticion) / response (Respuesta)

app.get('/',(req,res) => {
//Imprimir algo en pantalla
    res.send('Hola Mundo en Express')
})

app.get('/blog',(req,res) => {
    res.send('Este es el Blog')
})

app.get('/nosotros',(req,res) => {
    res.send('Esta es la seccion Nosotros')
})

app.get('/ecommerce',(req,res) => {
    res.send('Este es un Ecommerce')
})

//A nivel deploy no asignamos el puerto manualmente
//Le decimos que use la variable de entorno llamada puerto si existe, y sino que use el 4000.
const port = process.env.port || 4000


//Create  server, lo pongo en el puerto 4000 y en consola un mensaje de confirmacion 
app.listen(port,() => {
    console.log('Servidor Funcionando en el puerto:', port)
})


