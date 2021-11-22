/* import Usuario from "../modelos/Usuario"; */  //Formato Es6



const Avance = require("../modelos/Avance.js")



// Para Jalar los datos
module.exports.Obtener = (req,res) => {

    Avance.find({}, (error, respuesta) =>{
        if (error) 
        {
            return res.status(500).json({
                message: "error mostrando Avance"
            })
        }
            res.json(respuesta),
            console.log("se trajo esto de la BD :D --> " , respuesta)

    }).populate("proyecto")

} 

// Para Subir los datos
module.exports.Nuevo = (req,res) =>{
    console.log(req.body)
    
    Avance.create(req.body ,(error,respuesta)=>{
        
        if (error) 
        {
            return res.status(500).json({
                message: "error creando Avance"
            })
        }
            
            res.json(respuesta),
            console.log("se creo esto en la BD :D --> " , respuesta)

    })

}

// Para Editar datos :D

module.exports.Editar =  (req,res) =>{

    const proyecto = req.body.proyecto
    const fechaAvance = req.body.fechaAvance
    const descripcion = req.body.descripcion
    const observacionesLider = req.body.observacionesLider
          

        Avance.findByIdAndUpdate(req.body._id,{
        proyecto,    
        fechaAvance, 
        descripcion, 
        observacionesLider
    }, (error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error editando Avance"
            })
        }
            
            res.json(req.body),
            console.log("se edito esto en la BD :D --> " , req.body)

    }
    )

}

// Para deletearlo para siempre :(
module.exports.Eliminar = (req,res) =>{

    Avance.findByIdAndDelete(req.body._id,(error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error eliminando Avance"
            })
        }
            
            res.json(respuesta),
            console.log("se elimino esto en la BD :D --> " , respuesta)

    })


}