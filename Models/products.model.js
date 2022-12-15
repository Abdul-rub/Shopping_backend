const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{type:String,required: true},
    quantity: {type:Number, required: true},
    priority: {type:String,required: true},
    description:{type:String,required: true},
}, { timestamps: true })

const ProdModel = mongoose.model("products",ProductSchema)

module.exports= ProdModel