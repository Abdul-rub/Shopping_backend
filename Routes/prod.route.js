const {Router} = require("express");
const ProdModel = require("../Models/products.model")

const prod = Router()

//GET PROD
prod.get("/", async(req,res)=>{
    const product = await ProdModel.find();
    res.send(product)
})

//POST

prod.post("/create", async(req,res)=>{
    const {title,quantity,priority,description} = req.body;
    try {
        const newProd = await new ProdModel({title,quantity,priority,description})
        await newProd.save()
        res.send({msg:"Product added Successfully", newProd})
    } catch (error) {
        console.log(err)
        res.send("Something went wrong")
    }
})

module.exports = prod;