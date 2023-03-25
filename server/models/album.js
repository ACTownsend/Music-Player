/**
 * Defines the album schema for MongoDB.
 * @constructor
 * @param {Object} albumSchema - The album schema.
 * @param {string} albumSchema.name - The name of the album.
 * @param {string} albumSchema.imageURL - The URL of the album cover image.
 * @param {Object} albumSchema.timestamps - The timestamps of the album creation and modification.
 */
const mongoose = require("mongoose");
const albumSchema= mongoose.Schema(

    {
        name: {
            type : String,
            required : true,
        },
        imageURL :{
            type : String,
            required : true
        },
    },
    {timestamps : true}
); 

module.exports = mongoose.model("album", albumSchema);