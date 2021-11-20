import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import {proyectoModel} from "./proyectos.model.js"
import {userModel} from "./usuarios.model.js"

const inscripcionSchema = new Schema({

    
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: proyectoModel,         
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: userModel,         
    },         
    estado: String,             
    fechaIngreso: String,
    fechaEgreso: String,
    
});



const inscripcioneModel = model("inscripcion",inscripcionSchema,"inscripciones") 
export  {inscripcioneModel}