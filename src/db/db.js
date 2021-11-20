import mongoose from 'mongoose';

const conexion = async () => {
  return await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conexion;