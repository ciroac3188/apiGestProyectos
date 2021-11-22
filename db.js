const mongoose = require("mongoose")
const dotenv = require('dotenv').config()


const url = process.env.DATABASE_URL

mongoose.connect(url,{
     useNewUrlParser:true, 
     useUnifiedTopology:true, 
    /* UseFindAndModify:false,  */         // revisar que es esta vaina que no son soportadas :D 
    /* useCreateIndex:true */
})

const conexion = mongoose.connection

conexion.on("error", console.error.bind(console, " hay un error u.u "))
conexion.once("open", function callback() {
    console.log(": )  conexion Oki doky")
})

module.exports = conexion