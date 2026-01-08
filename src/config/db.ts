import mongoose  from "mongoose";

 

//usamos async await para que no se ejecuten lineas si la conexion no se establece
export const connectDB = async () => {
    
    //por si falla la ejecucion
    try{
        const dbPassword = process.env.DB_PASSWORD;
        const dbUser =process.env.DB_USER;
        //Pongo el pass y el password
        const url = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.gbo1vx4.mongodb.net/LinkStack_node_typescript`
        //con esto evito que lo que viene despues se ejecute si la conexion no corre bien
        if (!process.env.DB_PASSWORD || !process.env.DB_USER) {
            throw new Error("ERROR: Alguna variable de entorno no esta definida en el.env");
        }
        else{
            const connection = await mongoose.connect(url)
        
            const url2 = 

            console.log('MongoDB Conectado')
        }


    }
    catch (error){
        console.log(error)
    }
}