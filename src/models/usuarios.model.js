const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    correo: String,
    identificacion: String,
    nombreCompleto: String,
    clave: String,
    tipoUsuario: String,
    estado: String
});

module.exports = mongoose.model('usuarios', userSchema);