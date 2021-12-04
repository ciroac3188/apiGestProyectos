/* import Usuario from "../modelos/Usuario"; */  //Formato Es6



const Usuario = require("../modelos/Usuario.js")



// Para Jalar los datos
module.exports.Obtener = (req,res) => {

    Usuario.find({}, (error, respuesta) =>{
        if (error) 
        {
            return res.status(500).json({
                message: "error mostrando usuarios"
            })
        }
            res.json(respuesta),
            console.log("se trajo esto de la BD :D --> " , respuesta)

    })

} 

// Para Subir los datos
module.exports.Nuevo = (req,res) =>{

    
    Usuario.create(req.body ,(error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error creando usuario"
            })
        }
            
            res.json(respuesta),
            console.log("se creo esto en la BD :D --> " , respuesta)

    })

}

// Para Editar datos :D

module.exports.Editar = async (req,res) =>{

   
    const correo = req.body.correo
    const identificacion = req.body.identificacion
    const nombreCompleto = req.body.nombreCompleto
    const clave = req.body.clave
    const tipoUsuario = req.body.tipoUsuario
    const estado = req.body.estado
    
    await Usuario.findByIdAndUpdate(req.body._id,{
        correo,
        identificacion,
        nombreCompleto,
        clave,
        tipoUsuario,
        estado 
    }, (error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error editando usuario"
            })
        }
            
            res.json(req.body),
            console.log("se edito esto en la BD :D --> " , req.body)

    }
    )

}

module.exports.Eliminar = (req,res) =>{

    Usuario.findByIdAndDelete(req.body._id,(error,respuesta)=>{
        if (error) 
        {
            return res.status(500).json({
                message: "error eliminando usuario"
            })
        }
            
            res.json(respuesta),
            console.log("se elimino esto en la BD :D --> " , respuesta)

    })


}