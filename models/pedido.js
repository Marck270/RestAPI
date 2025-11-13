import mongoose, { model } from "mongoose"
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const pedidoSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true
    },
    productos: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: 'producto',
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            min: 1
        },
        precio: {
            type: Number,
            required: true,
            min: 0
        }
    }],
    total: {
        type: Number,
        required: true,
        min: 0
    },
    estado: {
        type: String,
        enum: ['pendiente', 'procesando', 'enviado', 'entregado', 'cancelado'],
        default: 'pendiente'
    },
    fechaPedido: {
        type: Date,
        default: Date.now
    },
    fechaEntrega: {
        type: Date
    },
    direccionEnvio: {
        type: String,
        trim: true
    },
    notas: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const pedido = mongoose.model("pedido", pedidoSchema)

export {
    pedido
}