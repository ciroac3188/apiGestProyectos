const  mongoose  = require("mongoose")

const Shema = mongoose.Schema


const usuarioShema = new Shema ({

    correo: 
    {
        type: String,
        required: true,
        unique: true
    },
    identificacion: String,
    nombreCompleto: String,
    clave: String,
    tipoUsuario: String,
    estado: String

},  {versionKey:false})

module.exports = mongoose.model("usuarios" ,usuarioShema )

