const express=require('express')
const app=express()
const FlowerRouter=require("./Router/Flower.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 4000
app.use(express.json())

mongoose.connect('mongodb+srv://agamaliyevallahverdi2:Allahverdi123.@cluster0.4uy4jne.mongodb.net/').then(res=>{
    console.log("connected to mongodb")
})

app.use("/flowers",FlowerRouter)

app.listen(PORT,()=>{
    console.log("back is runing")
})
