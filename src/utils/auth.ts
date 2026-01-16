
import bcrypt from 'bcrypt'

//hashear el password
//tomar el pass que el usuario envia 

export const hashPassword =  async (password : string) =>{
    //console.log(password)
    const salt = await bcrypt.genSalt(10)
    //Salt es cadena de caracteres aleatoria, a la hora de almacenar cadenas iguales en la bd, esas cadenas aunque sean iguales van a ser distintamente hasheados
    //se aplica 10 veces,  mientras mas alto el numero de rondas, mas seguro es el proceso. Pero en un numero alto, consume mas al servidor.
    //uso await ya que antes de empezar necesito que llegue lo anterior 
    return await bcrypt.hash(password,salt)


}

export const checkPassword = async (enterPassword:string,hash:string) =>{
    //compara la pass que se pasa por request con la hasheada, y devuelve   true y/o false 
    return await bcrypt.compare(enterPassword,hash)
     
}

