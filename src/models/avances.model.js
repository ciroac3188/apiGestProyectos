const mongoose = require('mongoose');

const avancechema = new mongoose.Schema({

    proyecto: Schema.Types.ObjectId,   //esta deberia ser una id de proyecto
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
   
});

module.exports = mongoose.model('avances', avancechema);