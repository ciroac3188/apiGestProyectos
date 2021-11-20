import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({

    proyecto: Schema.Types.ObjectId,           //deberia ser una id de proyecto
    estudiante: Schema.Types.ObjectId,         //deberia ser una ide de estudiante
    estado: String,             
    fechaIngreso: String,
    fechaEgreso: String,
    
});



const inscripcioneModel = model("inscripcion",inscripcionSchema,"inscripciones") 
export  {inscripcioneModel}