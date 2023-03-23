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
        twitter :{
            type : String,
        },
        instagram :{
            type : String,
        },
    },

    {timestamps : true},
);

module.exports = mongoose.model("artist", artistSchema);