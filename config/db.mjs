// config/db.mjs
import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://luisG:12345@cluster0.9onvz5w.mongodb.net/Libros';

mongoose.connect(dbURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});

export { db }; // Aquí exportamos db correctamente
