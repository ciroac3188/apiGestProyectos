import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conexion from './src/db/db.js';

const rutasUsuario = express.Router(); 


dotenv.config();



const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 3001 }, async () => {
  await conexion();
  console.log('servidor listo');
});






import {userModel} from "./src/models/usuarios.model.js"



const obtenerUsuario = async () =>{
  await conexion();
  await userModel.find()
  .then((u)=>{console.log("trajo esto",u)})     // dentro del find puedo agregar props {nombreCompleto:"blabla"}
  .catch((e)=>{console.log("No trajo nada :( ",e)})

};


const crearUsuario = async () =>{
  await conexion();
  await userModel.create({                //el create es una promesa por lo tanto await
      correo:"algo@gmail.com",
      identificacion:"123fg",
      nombreCompleto:"TeamARV",
      clave:"123456",
      tipoUsuario:"Admin",
      estado:"Pendiente",
     

  })
  .then((u)=>{console.log("el esquema usuario fue creado :D " , u)})
  .catch((e)=>{console.log("rip no pudo crear el esquema :( ",e)})
};


/* crearUsuario()  */

obtenerUsuario() 


app.get("/usuarios" , (req,res)=>{
  console.log("alguien hizo get en la ruta /usuarios")

  userModel.find((err,result) =>{

      if(err){
          res.status(500).send("error 400 al consultar productos")
      }

      else{
          res.json(result)
      }
  })

} )



