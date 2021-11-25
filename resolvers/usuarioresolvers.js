const Usuario = require("../modelos/Usuario.js")

module.exports.usuarioresolvers = {
 
    Query: {
      test: () => 'hola desde usuario',

      Usuarios: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
        const usuarios = await Usuario.find({_id:args._id});
        return usuarios;}
        else{const usuarios = await Usuario.find();
        return usuarios;}
      },
      

    },

  

    Mutation: {

      crearUsuario: async (parents,args) => {
         const usuariocreado =  await Usuario.create({
          correo : args.correo,
          identificacion : args.identificacion,
          nombreCompleto : args.nombreCompleto,
          clave : args.clave,
          tipoUsuario : args.tipoUsuario,
          estado : args.estado,
         })
         return usuariocreado},


         editarUsuario: async (parent, args) => {
          const usuarioEditado = await Usuario.findByIdAndUpdate(
            args._id,
            {
              correo : args.correo,
              identificacion : args.identificacion,
              nombreCompleto : args.nombreCompleto,
              clave : args.clave,
              tipoUsuario : args.tipoUsuario,
              estado : args.estado,
            },
            { new: true }
          );
    
          return usuarioEditado;},

          eliminarUsuario: async (parent, args) => {
              const usuarioDeleteado = await Usuario.findOneAndDelete({ _id: args._id });
              return usuarioDeleteado;},
        
    },


  };