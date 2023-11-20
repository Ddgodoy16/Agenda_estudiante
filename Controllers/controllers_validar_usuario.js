
import { db } from "../database/conn.js";
import jwt from 'jsonwebtoken';

const validacion = async (req, res)=>{

    
    let params = [
        req.body.nombre_usuario, 
        req.body.contrasena
    ]

    const sql = ` select nombre_usuario, correo from tbl_usuarios
                    where nombre_usuario =  $1
                    and contrasena = $2` ;

    const result  = await db.query(sql, params);

    if (result.length > 0) {

        const payload = {
            nombre_usuario : result[0].nombre_usuario,
            correo :   result[0].correo
        };


        const token = jwt.sign( payload, 'secret' , { expiresIn: '1h' });
     
        

          res.json({token})

    }else {

        res.status(404).json({mensaje : "Autenticacion No Exitosa"})


    }


}

export  {
    validacion
}