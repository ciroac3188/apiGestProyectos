/* import Usuario from "../modelos/Usuario"; */  //Formato Es6



const Proyecto = require("../modelos/Proyecto.js")



// Para Jalar los datos
module.exports.Obtener = (req,res) => {

    Proyecto.find({}, (error, respuesta) =>{
        if (error) 
        {
            return res.status(500).json({
                message: "error mostrando Proyecto"
            })
        }
            res.json(respuesta),
            console.log("se trajo esto de la BD :D --> " , respuesta)

    }).populate("lider").populate("inscritos")

} 

// Para Subir los datos
module.exports.Nuevo = (req,res) =>{
    console.log(req.body)
    
    Proyecto.create(req.body ,(error,respuesta)=>{
        
        if (error) 
        {
            return res.status(500).json({
                message: "error creando Proyecto"
            })
        }
            
            res.json(respuesta),
            console.log("se creo esto en la BD :D --> " , respuesta)

    })

}

// Para Editar datos :D

module.exports.Editar =  (req,res) =>{

    const nombre = req.body.nombre
    const presupuesto = req.body.presupuesto
    const objetivosGenerales = req.body.objetivosGenerales
    const objetivosEspecificos = req.body.objetivosEspecificos
    const fechaInicio = req.body.fechaInicio
    const fechaFin = req.body.fechaFin
    const estado = req.body.estado
    const faseProyecto = req.body.faseProyecto
    const inscritos = req.body.inscritos
    const avances = req.body.avances
    const lider = req.body.lider           

       Proyecto.findByIdAndUpdate(req.body._id,{
        nombre,    
        presupuesto, 
        objetivosGenerales, 
        objetivosEspecificos, 
        fechaInicio, 
        fechaFin,
        estado, 
        faseProyecto, 
        inscritos, 
        avances, 
        lider,
    }, (error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error editando Proyecto"
            })
        }
            
            res.json(req.body),
            console.log("se edito esto en la BD :D --> " , req.body)

    }
    )

}

// Para deletearlo para siempre :(
module.exports.Eliminar = (req,res) =>{

    Proyecto.findByIdAndDelete(req.body._id,(error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error eliminando Proyecto"
            })
        }
            
            res.json(respuesta),
            console.log("se elimino esto en la BD :D --> " , respuesta)

    })


}