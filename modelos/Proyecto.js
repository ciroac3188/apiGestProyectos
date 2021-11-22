const  mongoose  = require("mongoose")
const Usuario = require("./Usuario.js")

const Shema = mongoose.Schema


const proyectoShema = new Shema ({

    nombre: String,                 
    presupuesto: Number,
    objetivosGenerales: Array,
    objetivosEspecificos: Array,
    fechaInicio: String,
    fechaFin: String,
    estado: String,
    faseProyecto: String,
    inscritos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: Usuario},       
    avances: Array,         
    lider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuario,
        
              
    }

},  {versionKey:false})

module.exports = mongoose.model("proyectos" ,proyectoShema )

