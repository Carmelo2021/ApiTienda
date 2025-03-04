const mongoose = require("../config/connection");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({
  referencia: {
    type: [Number, "La referencia debe ser numerica"],
    required: [true,"La referencia es obligatoria"]
  },
  nombre: {
    type: [String, "El nombre debe ser alfanumerico"],
    required: [true,"El nombre es obligatorio"]
  },
  precio:{
    type: [Number, "el precio debe ser numérico"],
    default: 0.0,
    min: [0,"El precio no debe ser negativo"]
  }
},{versionKey: false});

const modeloProducto = mongoose.model("productosx", schemaProducto);

module.exports = modeloProducto;