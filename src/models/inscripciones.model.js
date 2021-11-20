const mongoose = require('mongoose');

const inscripcionSchema = new mongoose.Schema({

    proyecto: Schema.Types.ObjectId,           //deberia ser una id de proyecto
    estudiante: Schema.Types.ObjectId,         //deberia ser una ide de estudiante
    estado: String,             
    fechaIngreso: String,
    fechaEgreso: String,
    
});

module.exports = mongoose.model('inscripciones', inscripcionSchema);