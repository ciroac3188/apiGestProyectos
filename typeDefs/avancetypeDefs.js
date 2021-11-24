
const { gql } = require('apollo-server-express');


module.exports.avancetypeDefs = gql`
type Query {
  "A simple type for getting started!"
  avance: String
}
`;

