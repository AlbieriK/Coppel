import { modeloProductos } from "../models/productos.model.js";

const test = () => {
    console.log("Conexion exitosa en productos ;) ")
}
export default test

modeloProductos.create({
    objeto: "Telefono",

    modelo: "Redmi Note 11",
    
    total: 7000
})