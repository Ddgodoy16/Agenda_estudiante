import pg  from 'pg-promise';
const pgp = pg();

import dotenv  from "dotenv";
dotenv.config();

const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const dbName = process.env.DB;



const encodedPassword = encodeURIComponent(pass);
const cn = `postgres://${user}:${encodedPassword}@${host}:5432/${dbName}`;
const db = pgp(cn);


db.connect()
    .then(
        ()=>{

            console.log("Conexion Exitosa");
        }
    )
    .catch( (err)=>{

        console.log(`Error de Conexion ${err}`);

    } );

export {db};