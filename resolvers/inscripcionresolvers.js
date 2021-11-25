const Inscripcion = require("../modelos/Inscripcion.js")


module.exports.inscripcionresolvers = {
    Query: {
      testi: () => 'hola desde inscripcion',
      Inscripciones: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
        const inscripciones = await Inscripcion.find({_id:args._id}).populate("estudiante").populate("proyecto");
        return inscripciones;}
        else{const inscripciones = await Inscripcion.find().populate("estudiante").populate("proyecto");
        return inscripciones;}
      },
    },


    Mutation: {

      crearInscripcion: async (parents,args) => {
         const inscripcioncreado =  await Inscripcion.create({
          proyecto: args.proyecto,                 
          estudiante: args.estudiante,
          estado: args.estado,
          fechaIngreso: args.fechaIngreso,
          fechaEngreso: args.fechaEngreso
    
         })
         return inscripcioncreado},


         editarInscripcion: async (parent, args) => {
          const inscripcionEditado = await Inscripcion.findByIdAndUpdate(
            args._id,
            {
          proyecto: args.proyecto,                 
          estudiante: args.estudiante,
          estado: args.estado,
          fechaIngreso: args.fechaIngreso,
          fechaEngreso: args.fechaEngreso
            },
            { new: true }
          );
    
          return proyectoEditado;},   

          eliminarInscripcion: async (parent, args) => {
              const inscripcionDeleteado = await Inscripcion.findOneAndDelete({ _id: args._id });
              return inscripcionDeleteado;},
        
    },




  };