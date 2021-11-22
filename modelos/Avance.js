const  mongoose  = require("mongoose")
const Proyecto = require("./Proyecto.js")

const Shema = mongoose.Schema


const avanceShema = new Shema ({

    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Proyecto,         
    },
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
              
    

},  {versionKey:false})

module.exports = mongoose.model("avances" ,avanceShema )

