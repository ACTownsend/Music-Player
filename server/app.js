const express = require("express");
const app = express();
require("dotenv/config")

const cors = require("cors");
const {default:mongoose} = require("mongoose");

//app.use(cors({origin: true}));

app.get("/", (req, res) =>{
    return res.json("Testing Testing 123")
})

//user authentication route

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});
mongoose.connection
.once("open", () => console.log("Connected"))
.on("error", (error) =>{
    console.log('Error: ${error}');
})
app.listen(4001, () => console.log("Listening to Port 4001"));

