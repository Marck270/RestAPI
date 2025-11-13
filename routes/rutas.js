import express from "express"
import { crearCliente, consultaClientes, consultaPedidos, consultaProductos } from "../controller/api.js";
const router=express.Router();

router.post("/crear-cliente",crearCliente)
router.get("/consulta-clientes",consultaClientes)
router.get("/consulta-pedidos",consultaPedidos)
router.get("/consulta-productos",consultaProductos)

export default router