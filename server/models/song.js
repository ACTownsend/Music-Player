/**
 * Defines the song schema for MongoDB.
 * @constructor
 * @param {Object} songsSchema - The song schema.
 * @param {string} songsSchema.name - The name of the song.
 * @param {string} songsSchema.imageURL - The URL of the song cover image.
 * @param {string} songsSchema.songURL - The URL of the song file.
 * @param {string} songsSchema.album - The name of the Album the song belongs to.
 * @param {string} songsSchema.artist - The name of the Artist the song belongs to.
 * @param {string} songsSchema.category - The URL of the song cover image.
 * @param {Object} songsSchema.timestamps - The timestamps of the song creation and modification.
 */
const mongoose = require("mongoose");


const songsSchema = mongoose.Schema(
    {
        name :{
            type : String,
            required : true,
        },
        imageURL :{
            type : String,
            required : true
        },
        songURL :{
            type : String,
            required : true
        },
        album :{
            type : String, 
        },
        artist :{
            type : String,
            required : true
        },
        category :{
            type : String,
            required : true
        },
    },
    {timestamps : true},
);

module.exports = mongoose.model("song", songsSchema);