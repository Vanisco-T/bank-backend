import express from "express"
const app=express()
import cors from "cors"
import Router from "./routes/routes.js"
import mongoose from "mongoose"
app.use(cors())
app.use(express.json())
app.use('/',Router)
const mongoUrl="mongodb+srv://vanisco:vanisco@bank.wzky4qi.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected to database")
}).catch((e)=>console.log(e))

app.listen(5000,()=>{
    console.log("Server started")
})