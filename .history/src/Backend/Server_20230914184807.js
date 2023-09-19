const port  = process.env.PORT || 3800
const express = require("express")
const app = express();
require("./app")


app.listen(port,()=>{
    console.log("Server Running with ${}")
})