import type {NextFunction, Request, Response} from 'express'
import { validationResult } from 'express-validator'

export const  handleInputError = (req : Request ,res : Response, next : NextFunction) => {

     //manejear errores - Ver errores que se pasan al Request
    let errors = validationResult(req)
    console.log('desde validation ts')
    if(!errors.isEmpty()){
        return res.status(400).json({msg:'Falta informacion en la creacion del usuario',
        errors:errors.array()
        })
    }
    //Una vez que finaliza, pase a la siguiente funcion
    next()
    



}