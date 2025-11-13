import { cliente } from "../models/cliente.js"
import { producto } from "../models/producto.js"
import { pedido } from "../models/pedido.js"

// Controladores para Clientes
const crearCliente = async (req, res, next) => {
    const datos = req.body
    console.log(datos)
    const clientes = new cliente(datos)
    try {
        await clientes.save()
        res.json({
            mensaje: "Se creo el cliente"
        })
    } catch (error) {
        console.log(error)
        next()
    }
}

const consultaClientes = async (req, res, next) => {
    try {
        const clientes = await cliente.find({})
        res.json(clientes)
    } catch (error) {
        console.log(error)
        next()
    }
}

// Controladores para Productos (solo consulta)
const consultaProductos = async (req, res, next) => {
    try {
        const productos = await producto.find({})
        res.json(productos)
    } catch (error) {
        console.log(error)
        next()
    }
}

// Controladores para Pedidos (solo consulta)
const consultaPedidos = async (req, res, next) => {
    try {
        const pedidos = await pedido.find({})
            .populate('cliente', 'nombre empresa correo telefono')
            .populate('productos.producto', 'nombre descripcion precio categoria')
            .sort({ fechaPedido: -1 })
        res.json(pedidos)
    } catch (error) {
        console.log(error)
        next()
    }
}

const consultaPedidosPorEstado = async (req, res, next) => {
    try {
        const { estado } = req.params
        const pedidos = await pedido.find({ estado })
            .populate('cliente', 'nombre empresa correo telefono')
            .populate('productos.producto', 'nombre descripcion precio categoria')
            .sort({ fechaPedido: -1 })
        res.json(pedidos)
    } catch (error) {
        console.log(error)
        next()
    }
}

export {
    crearCliente,
    consultaClientes,
    consultaProductos,
    consultaPedidos,
    consultaPedidosPorEstado
}