import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema   = new Schema({
    correo: String,
    identificacion: String,
    nombreCompleto: String,
    clave: String,
    tipoUsuario: String,
    estado: String
});




const userModel = model("user",userSchema,"usuarios") 
export  {userModel}




