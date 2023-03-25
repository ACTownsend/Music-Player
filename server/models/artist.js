/**
 * Defines the artist schema for MongoDB.
 * @constructor
 * @param {Object} artistSchema - The artist schema.
 * @param {string} artistSchema.name - The name of the artist.
 * @param {string} artistSchema.imageURL - The URL of the artist cover image.
 * @param {Object} artistSchema.timestamps - The timestamps of the artist creation and modification.
 */
const mongoose = require("mongoose");


const artistSchema = mongoose.Schema(

    {
        name: {
            type : String,
            required : true,
        },
        imageURL :{
            type : String,
        },
    },

    {timestamps : true},
);

module.exports = mongoose.model("artist", artistSchema);