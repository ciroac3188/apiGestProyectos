const  mongoose  = require("mongoose")
const Usuario = require("./Usuario.js")
const Avance = require("./Avance.js")




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
    avances: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: Avance},              
    lider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuario, 
        
              
    }

},  
{
    versionKey:false,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
})


/* proyectoShema.virtual('avances', {
    ref: 'Avance',
    localField: '_id',
    foreignField: 'proyecto',
  });  */ 

module.exports = mongoose.model("proyectos" ,proyectoShema )

