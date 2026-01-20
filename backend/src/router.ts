//Configurar un objeto con todas las rutas para luego agregar a la configuracion principal
import { Router } from 'express';
import { body } from 'express-validator';
import { createAccount, login } from './handlers/index.js';
import { handleInputError } from './middleware/validation.js';
 

const router = Router();
//routig , creacion de rutas (usando metodos http get, post , put , patch)
//callback request (Peticion) / response (Respuesta)


//Autenticacion y registro
//Bloquear para que la peticion se realice controladamente con await y async
//Usamos Handlers 
router.post('/auth/register',
    //Las validaciones van antes del handler o controlador, para que no se ejecute si no pasa la validacion
    body('handle')
        .notEmpty().withMessage('El Handle no puede ir vacio..'),
    body('name')
        .notEmpty().withMessage('El Nombre no puede ir vacio..'),
    body('email')
        .notEmpty().withMessage('El Email no puede ir vacio..').bail()
        .isEmail().withMessage('Email no Valido'),
    body('password')
        .notEmpty().withMessage('La Contraseña no puede ir vacia').bail()
        .isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres'),
        handleInputError, //Para que el handle llegue limpio
    createAccount)
 

router.post('/auth/login',
    body('email')
        .notEmpty().withMessage('El Email no puede ir vacio.. Email Obligatrio').bail()
        .isEmail().withMessage('Email no Valido'),
    body('password')
        .notEmpty().withMessage('La Contraseña no puede ir vacia... Password Obligatria').bail(),
        handleInputError, //Para que el handle llegue limpio
    login
)

export default router