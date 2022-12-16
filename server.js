import express from "express"
const app=express()
import cors from "cors"
import Router from "./routes/routes.js"
import mongoose from "mongoose"
app.use(cors())
app.use(express.json())
app.use('/',Router)
import dotenv from "dotenv"

dotenv.config()
const mongoUrl=process.env.MONGO_CONNECTION
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected to database")
}).catch((e)=>console.log(e))

app.listen(process.env.PORT,()=>{
    console.log("Server started")
})