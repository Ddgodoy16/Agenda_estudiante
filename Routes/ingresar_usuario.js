import Express  from "express";
const usuarios= Express();
import { postRegistrarUsuarios} from "../Controllers/controllers_ingresar_usuario.js";



usuarios.post('/', postRegistrarUsuarios);


export {
    usuarios
}