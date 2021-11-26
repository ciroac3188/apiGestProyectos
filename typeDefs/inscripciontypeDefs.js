
const { gql } = require('apollo-server-express');
const Inscripcion = require("../modelos/Inscripcion.js")


module.exports.inscripciontypeDefs = gql`
type Inscripcion{
    _id: ID!
    proyecto:Proyecto,
    estudiante: Usuario,
    estado: String,
    fechaIngreso: String,
    fechaEgreso: String 
}
type Query {
  "A simple type for getting started!"
  testi: String
  Inscripciones(_id:ID): [Inscripcion]
}

type Mutation{

crearInscripcion(
    proyecto:String,
    estudiante: String,
    estado: String,
    fechaIngreso: String,
    fechaEgreso: String 

):Inscripcion

editarInscripcion(
    _id:ID!,
    proyecto:String,
    estudiante: String,
    estado: String,
    fechaIngreso: String,
    fechaEgreso: String 

):Inscripcion

eliminarInscripcion(
  _id:ID!
):Inscripcion

}



`;

