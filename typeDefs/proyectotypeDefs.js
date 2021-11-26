
const { gql } = require('apollo-server-express');


module.exports.proyectotypeDefs = gql`

type Usuario {
    _id: ID!
    correo: String
    identificacion: String
    nombreCompleto: String
    clave: String
    tipoUsuario: String
    estado: String
  }

type Avance{
    _id: ID!
    proyecto:Proyecto,
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
              
} 

 

type Proyecto{
    _id: ID!,
    nombre: String,                 
    presupuesto: Float,
    objetivosGenerales: [String],
    objetivosEspecificos: [String],
    fechaInicio: String,
    fechaFin: String,
    estado: String,
    faseProyecto: String,
    inscritos: [Usuario],        
    avances: [Avance],         
    lider: Usuario
}


type Query {
  "A simple type for getting started!"
  testp: String
  Proyectos(_id:ID): [Proyecto]
}

type Mutation{

crearProyecto(
    nombre: String,                 
    presupuesto: Float,
    objetivosGenerales: [String],
    objetivosEspecificos: [String],
    fechaInicio: String,
    fechaFin: String,
    estado: String,
    faseProyecto: String,
    inscritos: [String],        
    avances: [ID],         
    lider: ID

):Proyecto

editarProyecto(
    _id:ID!,
    nombre: String,                 
    presupuesto: Float,
    objetivosGenerales: [String],
    objetivosEspecificos: [String],
    fechaInicio: String,
    fechaFin: String,
    estado: String,
    faseProyecto: String,
    inscritos: [String],        
    avances: [ID],         
    lider: ID

):Proyecto

eliminarProyecto(
  _id:ID!
):Proyecto

}
`;

