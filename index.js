const cors = require("cors")
const connection = require("./Config/db")
const express = require("express")



const prod = require("./Routes/prod.route")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})

app.use("/products",prod)

//Connection 

app.listen(process.env.PORT || 8080, async(req,res)=>{
    try {
        await connection;
    console.log("connection successfull");
    } catch (error) {
        console.log("connection to database failed")
        console.log(error)
    }
    console.log(`listening on port ${process.env.PORT}`)
})