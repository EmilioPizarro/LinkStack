import mongoose, { Schema } from 'mongoose'

//El interface es un espejo del Schema.
//Informacion que requiere Typescript
export interface IUser{
    handle:string
    name:string
    email:string
    password:string

}


 
//definimos el schema , forma de los datos
//en mongo ,se define el schema y luego se asocia al modelo

const userSchema = new Schema({
 
    handle:{
        type:String,
        require: true,
        trim:true,
        lowercase:true,
        unique:true
    }, 
    name:{
        type:String,
        require: true,
        trim:true
    }, 
    email:{
        type:String,
        require: true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true,
        trim:true

    }

})

//defino el modelo, con el nombre que lo defino y el esquema que usa
//<User> es un Generic asociado a User 
const User  = mongoose.model<IUser>('User',userSchema)
//Lo exporto para poder usarlo en cualquier parte del codigo
export default User;