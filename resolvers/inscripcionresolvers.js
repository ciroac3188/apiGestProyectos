const Inscripcion = require("../modelos/Inscripcion.js")


module.exports.inscripcionresolvers = {
    Query: {
      testi: () => 'hola desde inscripcion',
      Inscripciones: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
        const inscripciones = await Inscripcion.find({_id:args._id}).populate("estudiante").populate({
          path:"proyecto",
          populate:({
            path:"lider"
          })
        }); 
        return inscripciones;}
        else{const inscripciones = await Inscripcion.find().populate("estudiante").populate({
          path:"proyecto",
          populate:({
            path:"lider"
          })
        }) 
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
          fechaEgreso: args.fechaEgreso
    
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
          fechaEgreso: args.fechaEgreso
            },
            { new: true }
          );
    
          return inscripcionEditado;},   

          eliminarInscripcion: async (parent, args) => {
              const inscripcionDeleteado = await Inscripcion.findOneAndDelete({ _id: args._id },
                { new: true });
              return inscripcionDeleteado;},
        
    },




  };