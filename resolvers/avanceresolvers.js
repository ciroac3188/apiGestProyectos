const Avance = require("../modelos/Avance.js")


module.exports.avanceresolvers = {
    Query: {
      testA: () => 'hola desde avance',
      Avances: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
        const avances = await Avance.find({_id:args._id}).populate("proyecto");
        return avances;}
        else{const avances = await Avance.find().populate("proyecto");
        return avances;}
      },
    },


    Mutation: {

      crearAvance: async (parents,args) => {
         const avancecreado =  await Avance.create({
          proyecto: args.proyecto,                 
          fechaAvance: args.fechaAvance,
          descripcion: args.descripcion,
          observacionesLider: args.observacionesLider,
         
    
         })
         return avancecreado},


         editarAvance: async (parent, args) => {
          const avanceEditado = await Avance.findByIdAndUpdate(
            args._id,
            {
              proyecto: args.proyecto,                 
              fechaAvance: args.fechaAvance,
              descripcion: args.descripcion,
              observacionesLider: args.observacionesLider,
            },
            { new: true }
          );
    
          return avanceEditado;},   

          eliminarAvance: async (parent, args) => {
              const avanceDeleteado = await Avance.findOneAndDelete({ _id: args._id });
              return avanceDeleteado;},
        
    },



  };