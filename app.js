/* import express from "express"; */  //nueva notacion ES6

const express = require("express")
const app = express()
const conexion = require("./db")
////////////////imports sacados de documentacion npm
var cors = require('cors')
app.use(cors())
const { ApolloServer, gql } = require('apollo-server-express');
///////////////////////////
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

///////defino server apollo
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
//////////

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const usuarios = require("./rutas/usuarios")
const proyectos = require("./rutas/proyectos")
const avances = require("./rutas/avances")
const inscripciones = require("./rutas/inscripciones")

app.use(usuarios)
app.use(proyectos)
app.use(avances)
app.use(inscripciones)

app.get("/",(req,res)=>{
res.send(" <h1><a href=\'http://localhost:3000/usuarios\'> Hola este es el backend Tipo REST de Insert Name 🐱‍👤</a> </br> <a href=\'http://localhost:3000/graphql\'> Hola este es el backend Tipo GraphQL de Insert Name 🐱‍👤</a> </h1>")
})

app.listen(3000 , async ()=>{
console.log("BackEnd Tipo REST Insert Name working in 🖥️ -> http://localhost:3000")
console.log("BackEnd Tipo GraphQL Insert Name working in 🕸️ -> http://localhost:3000/graphql")
await server.start()
await server.applyMiddleware({app})
})