
const { gql } = require('apollo-server-express');


module.exports.inscripciontypeDefs = gql`
type Query {
  "A simple type for getting started!"
  inscripcion: String
}
`;

