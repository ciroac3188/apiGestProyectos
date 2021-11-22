/* import express from "express"; */  //nueva notacion ES6

const express = require("express")
const app = express()
const conexion = require("./db")



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
res.send(" <h1><a href=\'http://localhost:3000/usuarios\'> Hola este es el backend de Insert Name 🐱‍👤</a></h1>")
})

app.listen(3000 ,()=>{
console.log("BackEnd Insert Name working in 🖥️ -> http://localhost:3000")
})