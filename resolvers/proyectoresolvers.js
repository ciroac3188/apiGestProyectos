const Proyecto = require("../modelos/Proyecto.js")




module.exports.proyectoresolvers = {
    Query: {
      testp: () => 'hola desde proyecto',

      
      Proyectos: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
        const proyectos = await Proyecto.find({_id:args._id}).populate("inscritos").populate("lider");
        return proyectos;}
        else{const proyectos = await Proyecto.find().populate("inscritos").populate("lider");
        return proyectos;}
      },

    },

    Mutation: {

      crearProyecto: async (parents,args) => {
         const proyectocreado =  await Proyecto.create({
          nombre: args.nombre,                 
          presupuesto: args.presupuesto,
          objetivosGenerales: args.objetivosGenerales,
          objetivosEspecificos: args.objetivosEspecificos,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          estado: args.estado,
          faseProyecto: args.faseProyecto,
          inscritos: args.inscritos,        
          avances:args.avances,         
          lider: args.lider
         })
         return proyectocreado},


         editarProyecto: async (parent, args) => {
          const proyectoEditado = await Proyecto.findByIdAndUpdate(
            args._id,
            {
              nombre: args.nombre,                 
              presupuesto: args.presupuesto,
              objetivosGenerales: args.objetivosGenerales,
              objetivosEspecificos: args.objetivosEspecificos,
              fechaInicio: args.fechaInicio,
              fechaFin: args.fechaFin,
              estado: args.estado,
              faseProyecto: args.faseProyecto,
              inscritos: args.inscritos,        
              avances: args.avances,         
              lider: args.lider
            },
            { new: true }
          );
    
          return proyectoEditado;},

          eliminarProyecto: async (parent, args) => {
              const proyectoDeleteado = await Proyecto.findOneAndDelete({ _id: args._id });
              return proyectoDeleteado;},
        
    },


  };