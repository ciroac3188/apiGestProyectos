const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,                 
    presupuesto: Number,
    objetivosGenerales: Array,
    objetivosEspecificos: Array,
    fechaInicio: String,
    fechaFin: String,
    lider: Schema.Types.ObjectId,
    estado: String,
    faseProyecto: String,
    inscritos: Array,       //debira ser un array de id inscritos
    avances: Array,         //debria ser un array de id avances
});

module.exports = mongoose.model('usuarios', userSchema);