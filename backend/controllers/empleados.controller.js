import { modeloEmpleados } from "../models/empleados.model.js";

const test = () => {
    console.log("La Conexión ha sido exitosa en empleado.controller")
}
export default test

modeloEmpleados.create({

    nombre: "Cristiano",

    apellido: "Ronaldo siuuu",
    
    edad: 29,
    sueldo:9999

    
})
