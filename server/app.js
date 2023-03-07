const express = require("express");
const app = express();


const cors = require("cors");

app.get("/", (req, res) =>{
    return res.json("Testing Testing 123")
})

app.listen(4001, () => console.log("Listening to Port 4001"));

