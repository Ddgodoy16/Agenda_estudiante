import { db } from "../database/conn.js";

const postRegistrarUsuarios = async (req, res) => {
    const params = [
      req.body.nombre_usuario,
      req.body.correo,
      req.body.contrasena,
      req.body.telefono,
      
    ];
    
  
    let sql = `INSERT INTO tbl_usuarios (nombre_usuario, correo, contrasena, telefono)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
  
      const result = await db.query(sql, params);

    res.json(result);


} 

export {
    postRegistrarUsuarios
}

