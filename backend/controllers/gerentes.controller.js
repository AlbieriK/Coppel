import { modeloGerentes } from "../models/gerentes.model.js";

const test = () => {
    console.log("conexion a Gerente exitosa ")
}
export default test

modeloGerentes.create({
    nombre: "Messi",

    apellido: "zzzz",
    
    edad: 49,
    
    sueldo:20000
})