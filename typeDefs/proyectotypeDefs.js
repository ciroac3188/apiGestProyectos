
const { gql } = require('apollo-server-express');


module.exports.proyectotypeDefs = gql`
type Query {
  "A simple type for getting started!"
  proyecto: String
}
`;

