
const { gql } = require('apollo-server-express');


module.exports.usuariotypeDefs = gql`
type Token{
  token:String
  error:String
}
 type Usuario {
    _id: ID!
    correo: String
    identificacion: String
    nombreCompleto: String
    clave: String
    tipoUsuario: String
    estado: String
    
  }
type Query {
  "A simple type for getting started!"
  test: String
  Usuarios(_id:ID): [Usuario]
}

type Mutation{

  crearUsuario(
    correo: String
    identificacion: String
    nombreCompleto: String
    clave: String
    tipoUsuario: String
    estado: String
  
  ):Usuario

  crearRegistro(
    correo: String
    identificacion: String
    nombreCompleto: String
    clave: String
    tipoUsuario: String
    estado: String
  
  ):Token

  login(
    correo: String!
    clave: String!
  ):Token

  testToken:Token

  editarUsuario(
    _id:ID!
    correo: String
    identificacion: String
    nombreCompleto: String
    clave: String
    tipoUsuario: String
    estado: String
  
  ):Usuario

  eliminarUsuario(
    _id:ID!
  ):Usuario

}
`;

