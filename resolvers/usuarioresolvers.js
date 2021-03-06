const Usuario = require("../modelos/Usuario.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {TokenGenerado} = require("../tokens/tokenGen.js")


module.exports.usuarioresolvers = {
 
    Query: {
      test: () => 'hola desde usuario',

      Usuarios: async (parent, args) => {
        if (Object.keys(args).includes('_id')) {
        const usuarios = await Usuario.find({_id:args._id});
        return usuarios;}
        else{const usuarios = await Usuario.find() ;
        return usuarios;}
      },
      

    },

  

    Mutation: {

      crearUsuario: async (parents,args) => {
        const salt = await bcrypt.genSalt(saltRounds)
        const cifrado = await bcrypt.hash( args.clave, salt)
         const usuariocreado =  await Usuario.create({
          correo : args.correo,
          identificacion : args.identificacion,
          nombreCompleto : args.nombreCompleto,
          clave : cifrado,
          tipoUsuario : args.tipoUsuario,
          estado : args.estado,
         })
         return usuariocreado
        },

        login: async (parents,args) => {

         

           const searchUser = await Usuario.findOne({correo:args.correo})
           if(searchUser != null){
            const validate = await bcrypt.compare(args.clave, searchUser.clave )
            if(validate===true){
 
             console.log(validate)
            return{ token:  TokenGenerado({
 
             _id: searchUser._id,
             correo : searchUser.correo,
             identificacion : searchUser.identificacion,
             nombreCompleto : searchUser.nombreCompleto,
             tipoUsuario : searchUser.tipoUsuario,
             estado : searchUser.estado,
 
            })}
  
            }else {return {error : ":( la clave ingresada esta mal"  }}

           }else {return {error : "El usuario no existe" }}

    
          },


          testToken: async (parents,args,context) => {

            console.log("el context", context);

            if(!context.userData){return {error : "token no valido" }}
            else{ return{
              token: TokenGenerado({

                _id: context.userData._id,
                correo : context.userData.correo,
                identificacion : context.userData.identificacion,
                nombreCompleto : context.userData.nombreCompleto,
                tipoUsuario : context.userData.tipoUsuario,
                estado : context.userData.estado,
    
               })
            }
            
            }

     
           },


        crearRegistro: async (parents,args) => {
          const searchUser = await Usuario.findOne({correo:args.correo})
          
          if(searchUser == null){

            const salt = await bcrypt.genSalt(saltRounds)
            const cifrado = await bcrypt.hash( args.clave, salt)
             const usuariocreado =  await Usuario.create({
              correo : args.correo,
              identificacion : args.identificacion,
              nombreCompleto : args.nombreCompleto,
              clave : cifrado,
              tipoUsuario : args.tipoUsuario,
              estado : args.estado,
             })
             return {token: TokenGenerado({
  
              _id: usuariocreado._id,
              correo : usuariocreado.correo,
              identificacion : usuariocreado.identificacion,
              nombreCompleto : usuariocreado.nombreCompleto,
              /* clave : usuariocreado.clave, */
              tipoUsuario : usuariocreado.tipoUsuario,
              estado : usuariocreado.estado,
  
             })
            }

          } 

          {return {error : "El correo Ya existe en la BD :("  }}
          },


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