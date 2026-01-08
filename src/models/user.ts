import mongoose, { Schema } from 'mongoose'


//definimos el schema , forma de los datos
//en mongo ,se define el schema y luego se asocia al modelo

const userSchema = new Schema({
 
    name:{
        type:String,
        require: true,
        trim:true
    },
    email:{
        type:String,
        require: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true

    }

})

//defino el modelo, con el nombre que lo defino y el esquema que usa
const User = mongoose.model('User',userSchema)
//Lo exporto para poder usarlo en cualquier parte del codigo
export default User;