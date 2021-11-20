import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const avancechema = new Schema({

    proyecto: Schema.Types.ObjectId,   //esta deberia ser una id de proyecto
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
   
});



const avanceModel = model("avance",avancechema,"avances") 
export  {avanceModel}