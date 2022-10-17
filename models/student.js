const mongoose = require('mongoose'); // Importar mongoose
const Schema = mongoose.Schema; // Instanciar el Schema

const studentSchema = new Schema( // Crear el Schema
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rollno: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'students',
  }
);

module.exports = mongoose.model('Student', studentSchema); // RESULTADO FINAL
