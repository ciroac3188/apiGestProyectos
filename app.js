/* import express from "express"; */  //nueva notacion ES6
const { ApolloServer } = require('apollo-server-express');
const {TokenValidator} = require("./tokens/tokenGen.js")
const dotenv = require('dotenv').config()
const express = require("express")
const conexion = require("./db")
var cors = require('cors')
const app = express()
app.use(cors())




const {usuariotypeDefs} = require("./typeDefs/usuariotypeDefs")
const {usuarioresolvers} = require("./resolvers/usuarioresolvers") 

const {proyectotypeDefs} = require("./typeDefs/proyectotypeDefs")
const {proyectoresolvers} = require("./resolvers/proyectoresolvers") 

const {inscripciontypeDefs} = require("./typeDefs/inscripciontypeDefs")
const {inscripcionresolvers} = require("./resolvers/inscripcionresolvers") 

const {avancetypeDefs} = require("./typeDefs/avancetypeDefs")
const {avanceresolvers} = require("./resolvers/avanceresolvers") 

/////////defino server apollo con los cosos de graphql
const getUserData =(token) =>{
 
  const verificacion = TokenValidator(token.split(' ')[1]) // para quitar la palabra barrer y poder meter el token limpio
  if(verificacion.data){return verificacion.data} 
  else{return null}
}

const server = new ApolloServer({                         
    typeDefs:[usuariotypeDefs , proyectotypeDefs, inscripciontypeDefs, avancetypeDefs],
    resolvers:[usuarioresolvers , proyectoresolvers, inscripcionresolvers, avanceresolvers],
    context: ({ req }) => {
      const token = req.headers?.authorization ?? null;
      if (token) {
        const userData = getUserData(token);
        if (userData) {
          return { userData };
        }
      }
      return null;
    },
  });

///////// rutas :D//////////////////////////////////////
const usuarios = require("./rutas/usuarios")
const proyectos = require("./rutas/proyectos")
const avances = require("./rutas/avances")
const inscripciones = require("./rutas/inscripciones")
// ruta raiz bienvenida  
app.get("/",(req,res)=>{
  res.send(" <h1><a href=\'https://pruebaborrar939.herokuapp.com/usuarios\'> Hola este es el backend Tipo REST de Insert Name 🐱‍👤</a> </br> <a href=\'https://pruebaborrar939.herokuapp.com/graphql\'> Hola este es el backend Tipo GraphQL de Insert Name 🐱‍👤</a> </h1>")
  })
//////////middleware////////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(usuarios , proyectos , avances , inscripciones)
///////////////////////////////////////////////////////





app.listen({port:process.env.PORT || 3001} , async ()=>{
console.log("BackEnd Tipo REST Insert Name working in 🖥️ -> https://pruebaborrar939.herokuapp.com")
console.log("BackEnd Tipo GraphQL Insert Name working in 🕸️ -> https://pruebaborrar939.herokuapp.com/graphql")
await server.start()
await server.applyMiddleware({app})
})