import mongoose  from "mongoose";

//usamos async await para que no se ejecuten lineas si la conexion no se establece
export const connectDB = async () => {
    
    //por si falla la ejecucion
    try{
        //Pongo el pass y el password
        const url = 'mongodb+srv://emiliopizarro866_db_user:mTwAdw8iFXlLSDKb@cluster0.gbo1vx4.mongodb.net/LinkStack_node_typescript'
        //con esto evito que lo que viene despues se ejecute si la conexion no corre bien
        const connection = await mongoose.connect(url)
        
        const url2 = 

        console.log('MongoDB Conectado')

    }
    catch (error){
        console.log(error)
    }
}