import Express  from "express";
const validar = Express();
import { validacion } from "../Controllers/controllers_validar_usuario.js";

validar.post( '',  validacion);

export {
   validar
}