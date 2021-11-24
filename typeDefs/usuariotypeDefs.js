
const { gql } = require('apollo-server-express');


module.exports.usuariotypeDefs = gql`
type Query {
  "A simple type for getting started!"
  usuario: String
}
`;

