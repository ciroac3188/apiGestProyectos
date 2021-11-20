import {userModel} from "./src/models/usuarios.model.js"
import {avanceModel} from "./src/models/avances.model.js"
import {proyectoModel} from "./src/models/proyectos.model.js"
import {inscripcioneModel} from "./src/models/inscripciones.model.js"

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conexion from './src/db/db.js';




dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


app.listen({ port: process.env.PORT || 3001 }, async () => {
  await conexion();
  console.log('servidor listo');
});








///// Crud basico usuario 

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


const editUsuario = async (a,b) =>{
  const usuario = await userModel.updateOne(
    {_id:a},
    {$set:{
      correo: b
    }}
  )}

const deleteUsuaruio = async (a) =>{
  const usuario = await userModel.deleteOne({_id:id})
}


/* crearUsuario()  */
/* obtenerUsuario()  */
/* editUsuario() */
/* deleteUsuaruio() */


///// Crud basico proyecto

const crearProyecto = async () =>{
  await conexion();
  await proyectoModel.create({                //el create es una promesa por lo tanto await
    nombre: "proyectoDemo",                 
    presupuesto: 100,
    objetivosGenerales: ["Abc" , "bcd"],
    objetivosEspecificos: ["Abc" , "bcd"],
    fechaInicio: "10/10/10",
    fechaFin: "10/10/11",
    estado: "null",
    faseProyecto: "iniciado",
    inscritos: ["Abc" , "bcd"],       //debira ser un array de id inscritos
    avances: ["Abc" , "bcd"],         //debria ser un array de id avances
    lider: "619928cc31c7149262f9693c",
     

  })
  .then((u)=>{console.log("el esquema proyecto fue creado :D " , u)})
  .catch((e)=>{console.log("rip no pudo crear el esquema :( ",e)})
};

const obtenerProyecto = async () =>{
  await conexion();
  const proyectos = await proyectoModel.find().populate('lider')
  .then((u)=>{console.log("trajo esto",u)})     // dentro del find puedo agregar props {nombreCompleto:"blabla"}
  .catch((e)=>{console.log("No trajo nada :( ",e)})

};

 /* crearProyecto()   */
 /* obtenerProyecto()   */


 ///////////////////////////////
 const crearAvance = async () =>{
  await conexion();
  await avanceModel.create({                //el create es una promesa por lo tanto await
    proyecto:"619964a1612b9243352d82bc",
    fechaAvance: "10/10/10",
    descripcion: "descripcion del avance",
    observacionesLider:"Aqui las observaciones del lider"
   
     

  })
  .then((u)=>{console.log("el esquema avance fue creado :D " , u)})
  .catch((e)=>{console.log("rip no pudo crear el esquema :( ",e)})
};

const obtenerAvance= async () =>{
  await conexion();
  const proyectos = await avanceModel.find().populate('proyecto')
  .then((u)=>{console.log("trajo esto",u)})     // dentro del find puedo agregar props {nombreCompleto:"blabla"}
  .catch((e)=>{console.log("No trajo nada :( ",e)})

};


/* crearAvance() */
/* obtenerAvance() */

//crud inscripciones

const crearInscripcion = async () =>{
  await conexion();
  await inscripcioneModel.create({                //el create es una promesa por lo tanto await
    proyecto:"619964a1612b9243352d82bc",
    estudiante: "6199224f2adad48f89ecbbbe",
    estado: "Activo",
    fechaIngreso:"10/10/9",
    fechaEgreso:"desconocida"
   
     

  })
  .then((u)=>{console.log("el esquema avance fue creado :D " , u)})
  .catch((e)=>{console.log("rip no pudo crear el esquema :( ",e)})
};

const obtenerInscripcion= async () =>{
  await conexion();
  const proyectos = await inscripcioneModel.find().populate('proyecto').populate('estudiante')
  .then((u)=>{console.log("trajo esto",u)})     // dentro del find puedo agregar props {nombreCompleto:"blabla"}
  .catch((e)=>{console.log("No trajo nada :( ",e)})

};
/* crearInscripcion() */

obtenerInscripcion()

// Prueba de endpoints

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

app.post("/usuarios/nuevo" , (req,res)=>{
  console.log("alguien hizo get en la ruta /nuevo")
  const datosUsuario = req.body;

  userModel.create(datosUsuario,(err,result) =>{

      if(err){
          res.status(500).send("error 400 enviar user")
      }

      else{
          res.json(result)
      }
  })

} )

app.patch("/usuarios/edit" , (req,res)=>{
  console.log("alguien hizo patch en la ruta /edit")
  const datosUsuario = req.body;
  console.log(datosUsuario._id)

  editUsuario(datosUsuario._id,datosUsuario.correo)
  res.json("ok edit")

 })

////////////////////////////////////
