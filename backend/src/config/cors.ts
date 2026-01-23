//soporte de cors

import { type CorsOptions } from 'cors';

export const corsConfig : CorsOptions = {
    //origin -> quien envia la conexion, quien trata de conectarse
    //callback
    origin: function(origin,callback){
        console.log(origin)
    }
}