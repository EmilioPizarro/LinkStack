import mongoose  from "mongoose";
import colors from 'colors'

//usamos async await para que no se ejecuten lineas si la conexion no se establece
//ArrowFunction y Promise -> Inferencia
//Infiere que nos vamos a conecta a una db, y como la funcion es asincrona , usa una promesa 
//lo que devuelve una funcion asyncronica, es una promise
export const connectDB = async () => {
    
    //por si falla la ejecucion
    try{
        const mongoUri = process.env.MONGO_URI as string; 
        const {connection} = await mongoose.connect(mongoUri)
        //Pongo el pass y el password
        const url = `${connection.host}:${connection.port}`;
        //con esto evito que lo que viene despues se ejecute si la conexion no corre bien
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`))


    }
    catch (error){
        console.log(colors.bgRed.white.bold((error as Error).message))
        //Para terminar la ejecucion en caso de error
        process.exit(1)
    }
}