import  Express  from "express";
const app = Express();

import { usuarios} from "./Routes/ingresar_usuario.js";
import { validar} from "./Routes/validar_usuario.js";

app.use(Express.json());

app.use('/api/ingresar_usuario', usuarios);
app.use('/api/validar_usuario', validar);

app.listen(3000);