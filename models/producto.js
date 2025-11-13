import mongoose, { model } from "mongoose"
const Schema = mongoose.Schema;

mongoose.pluralize(null);
const productoSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    categoria: {
        type: String,
        trim: true
    },
    stock: {
        type: Number,
        default: 0,
        min: 0
    },
    activo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const producto = mongoose.model("producto", productoSchema)

export {
    producto
}