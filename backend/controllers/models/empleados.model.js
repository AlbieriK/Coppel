import { Schema, model } from "mongoose";

export const esquema1 = new Schema({
    
    nombre:{ type:String},
    
    apellido:{type:String},
    
    edad:{ type: Number},

        sueldo:{type: Number }
})


export const modeloEmpleados = new model('Empleado', esquema1)
