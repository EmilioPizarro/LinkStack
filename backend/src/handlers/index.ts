//aca iran las funciones encargadas de la comunicacion con la BD, los metodos 
import type { Request, Response } from 'express'
import {validationResult} from 'express-validator'
import slug from 'slug' //para Handl
import User from "../models/user.js"
import { checkPassword, hashPassword } from '../utils/auth.js' 



export const createAccount = async (req:Request, res:Response) =>{
    console.log(req.body)
    try{
        
        

        const {email,password} = req.body
        const userExist = await User.findOne({email})
        if(userExist){
            const error = new Error('El usuario ya está registrado')
            //Detener la respuesta ante un duplicado
            return res.status(409).json({error : error.message})
        } 

        const handle = slug(req.body.handle,'')
        const handleExist = await User.findOne({handle})
        if(handleExist){
            const error = new Error('El Nombre de usuario ya está registrado')
            return res.status(409).json({error:error.message})
        }





        //instancio un usuario con la informacion del body
        const user = new User(req.body)
        //como la funcion es asincrona hay que ponerle el await
        user.password = await hashPassword(password)
        user.handle = handle
        console.log(slug(handle, ''))

        //Lo que el usuario envia en la peticion, se ingresa con el modelo de usuarios a la BD
        await user.save()
        //Responder al SV para que deje de estar en processing
        res.status(201).send("Registro de Usuario creado correctamente")
    }
    catch(error){
        console.log(error)
        res.status(500).send("Error al crear registro de Usuario")
    }  
}

export const login = async (req:Request,res:Response) =>{
   

    //Pasado los errores buscamos si el user existe
    const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            const error = new Error('El usuario/Correo no está registrado')
            //Detener la respuesta ante una inexistencia
            return res.status(404).json({msg:'El usuario no existe',error : error.message})
        }

        const isPasswordCorrect = await checkPassword(password,user.password)
        if(!isPasswordCorrect){
            const error = new Error('Password Incorrecto')
            //Detener la respuesta ante una inexistencia
            return res.status(401).json({error : error.message})

        }

        res.send('Autorizado')
        
    }
        


