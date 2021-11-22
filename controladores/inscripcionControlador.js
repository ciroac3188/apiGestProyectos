/* import Usuario from "../modelos/Usuario"; */  //Formato Es6



const Inscripcion = require("../modelos/Inscripcion.js")



// Para Jalar los datos
module.exports.Obtener = (req,res) => {

    Inscripcion.find({}, (error, respuesta) =>{
        if (error) 
        {
            return res.status(500).json({
                message: "error mostrando Inscripcion"
            })
        }
            res.json(respuesta),
            console.log("se trajo esto de la BD :D --> " , respuesta)

    }).populate("proyecto").populate("estudiante")

} 

// Para Subir los datos
module.exports.Nuevo = (req,res) =>{
    console.log(req.body)
    
    Inscripcion.create(req.body ,(error,respuesta)=>{
        
        if (error) 
        {
            return res.status(500).json({
                message: "error creando Inscripcion"
            })
        }
            
            res.json(respuesta),
            console.log("se creo esto en la BD :D --> " , respuesta)

    })

}

// Para Editar datos :D

module.exports.Editar =  (req,res) =>{

    const proyecto = req.body.proyecto
    const estudiante = req.body.estudiante
    const estado = req.body.estado
    const fechaIngreso = req.body.fechaIngreso
    const fechaEgreso = req.body.fechaEgreso
          

    Inscripcion.findByIdAndUpdate(req.body._id,{
        proyecto,    
        estudiante, 
        estado, 
        fechaIngreso, 
        fechaEgreso

    }, (error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error editando Inscripcion"
            })
        }
            
            res.json(req.body),
            console.log("se edito esto en la BD :D --> " , req.body)

    }
    )

}

// Para deletearlo para siempre :(
module.exports.Eliminar = (req,res) =>{

    Inscripcion.findByIdAndDelete(req.body._id,(error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error eliminando Inscripcion"
            })
        }
            
            res.json(respuesta),
            console.log("se elimino esto en la BD :D --> " , respuesta)

    })


}