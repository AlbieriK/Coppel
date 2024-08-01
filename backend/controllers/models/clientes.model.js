import { Schema, model } from "mongoose";

export const esquema = new Schema({

    nombre:{ type:String},

    apellidos:{type:String},

    edad: {type: Number},

    Total: {type: Number}

})

export const modeloClientes = new model('Clientes', esquema)

