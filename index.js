import express from "express"
import router from "./routes/rutas.js"
import mongoose from "mongoose"
import cors from "cors"

mongoose.Promise=global.Promise
mongoose.connect('mongodb+srv://marckfortis_db_user:RYYakLnuYfBd6CT0@cluster0.fuf2to9.mongodb.net/restapi?appName=Cluster0')
// mongoose.connect('mongodb+srv://marckfortis_db_user:RYYakLnuYfBd6CT0@cluster0.fuf2to9.mongodb.net/restapi?appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


const app=express()

//accesos json
app.use(express.json())

//accesos a los datos del formulario
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api",router)

app.listen(3001)