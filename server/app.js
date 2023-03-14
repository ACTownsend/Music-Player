const express = require("express");
const app = express();
require("dotenv/config")

const cors = require("cors");
const {default:mongoose} = require("mongoose");

app.use(cors({origin: true}));
app.use(express.json())

app.get("/", (req, res) =>{
    return res.json("Testing Testing 123")
})

//artist routes
const artistsRoutes = require("./routes/artist");
app.use("api/artist/", artistsRoutes);
//album routes
const albumRoutes = require("./routes/albums");
app.use("api/albums/", albumRoutes);
//song routes
const songRoutes = require("./routes/song");
app.use("api/song/", songRoutes);

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});
mongoose.connection
.once("open", () => console.log("Connected"))
.on("error", (error) =>{
    console.log('Error: ${error}');
})
app.listen(4001, () => console.log("Listening to Port 4001"));

