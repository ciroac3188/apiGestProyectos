import mongoose from 'mongoose';
const { Schema, model } = mongoose;

import {userModel} from "./usuarios.model.js"


const proyectoSchema = new Schema({
    nombre: String,                 
    presupuesto: Number,
    objetivosGenerales: Array,
    objetivosEspecificos: Array,
    fechaInicio: String,
    fechaFin: String,
    estado: String,
    faseProyecto: String,
    inscritos: Array,       //debira ser un array de id inscritos
    avances: Array,         //debria ser un array de id avances
    lider: {
        type: Schema.Types.ObjectId,
        ref: userModel,         
    }
},

);


const proyectoModel = model("proyecto",proyectoSchema,"proyectos") 
export  {proyectoModel}