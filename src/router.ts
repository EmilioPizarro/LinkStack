//Configurar un objeto con todas las rutas para luego agregar a la configuracion principal
import {response, Router} from 'express'

const router = Router();
//routig , creacion de rutas (usando metodos http get, post , put , patch)
//callback request (Peticion) / response (Respuesta)



//Autenticacion y registro
router.post('/auth/register',(req,res) =>{
    console.log(req.body)
})
 


export default router