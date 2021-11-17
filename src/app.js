const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const option = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada correctamente"))
.catch((e) => console.log("Error en la conexión: " + e));

//escucha
app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://localhost:${process.env.PORT}`)
);