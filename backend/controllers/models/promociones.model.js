import { Schema, model } from "mongoose";

export const esquema4 = new Schema({
    objeto:{ type:String},
    marca: {type:String},
    precio:{type:Number},
    descuento:{ type: Number},
    Total:{ type: Number}
})

export const modeloPromociones = new model('Promociones', esquema4)

