const { default: mongoose } = require("mongoose");

const FlowerModel=mongoose.model("Flowers",new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    discount:Number,
    image:String
}))

module.exports= {FlowerModel}