//ESM pide que se exporte asi
import server from './server.js'


//A nivel deploy no asignamos el puerto manualmente
//Le decimos que use la variable de entorno llamada puerto si existe, y sino que use el 4000.
const port = process.env.port || 4000

//Create  server, lo pongo en el puerto 4000 y en consola un mensaje de confirmacion 
server.listen(port,() => {
    console.log('Servidor Funcionando en el puerto:', port)
})

 
server.get('/blog',(req,res) => {
    res.send('Este es el Blog')
})

server.get('/nosotros',(req,res) => {
    res.send('Esta es la seccion Nosotros')
})

server.get('/ecommerce',(req,res) => {
    res.send('Este es un Ecommerce')
})
 
