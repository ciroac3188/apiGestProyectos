
const { gql } = require('apollo-server-express');


module.exports.avancetypeDefs = gql`
type Avance{
    _id: ID!
    proyecto:Proyecto,
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
              
}
type Query {
  "A simple type for getting started!"
  testA: String
  Avances(_id:ID): [Avance]
}


type Mutation{

crearAvance(
  proyecto:String,
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,

):Avance

editarAvance(
    _id:ID!,
    proyecto:String,
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,

):Avance

eliminarAvance(
  _id:ID!
):Avance

}

`;

