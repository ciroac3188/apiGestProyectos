import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import {proyectoModel} from "./proyectos.model.js"


const avancechema = new Schema({

    proyecto: {
        type: Schema.Types.ObjectId,
        ref: proyectoModel,         
    },
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
   
});



const avanceModel = model("avance",avancechema,"avances") 
export  {avanceModel}