const  mongoose  = require("mongoose")
const Usuario = require("./Usuario.js")
const Proyecto = require("./Proyecto.js")

const Shema = mongoose.Schema


const inscripcionShema = new Shema ({

                 
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Proyecto},
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuario},
        
    estado: String,
    fechaIngreso: String,
    fechaEgreso: String 
        


},  {versionKey:false,},
    
)

module.exports = mongoose.model("inscripciones" ,inscripcionShema )

