const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

/**
 * Enables cross-origin resource sharing for all origins.
 * Parses incoming JSON payloads.
 */
app.use(cors({ origin: true }));
app.use(express.json());
 

app.get("/", (req,res) => {
  return res.json("Test")
})

// Artist links
const artistsRoute = require("./routes/artist");
app.use("/api/artist/", artistsRoute);

// Album links
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

// Songs links
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);

/**
 * Connects to the MongoDB database using the DB_STRING environment variable.
 * Logs a message to the console when the connection is successfully established.
 * Logs an error message to the console if there is a connection error.
 */
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });

  /**
 * Starts the server listening on port 4001.
 * Logs a message to the console when the server starts.
 */
app.listen(4001, () => console.log("listening to port 4001"));