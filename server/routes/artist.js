const router = require("express").Router();


const artist = require("../models/artist");

/**
 * Route to save a new artist
 * @name POST /api/artists/save
 * @function
 * @memberof module:routers/artists
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.name - The name of the artist to be saved
 * @param {string} req.body.imageURL - The image URL of the artist to be saved
 * @returns {Object} 200 - The saved artist object or an error message
 * @returns {Object} 400 - An error message if the artist cannot be saved
 */
router.post("/save", async (req,res)  => {

        const newArtist = artist(
            {
                    name : req.body.name,
                    imageURL : req.body.imageURL,
            });
    try {
        const savedArtist = await newArtist.save();
        return res.status(200).send({success : true, artist : savedArtist});
    } catch (error) {
        return res.status(400).send({success : false, msg : error});
    }        
});

/**
 * Get artists by ID
 * @route GET /api/artist/getOne/{id}
 * @param {string} id.path.required - artist ID.
 * @returns {object} 200 - An object containing the artist data.
 * @returns {object} 400 - An object containing an error message.
 */
router.get("/getOne/:id", async (req,res)  => {
    const filter = {_id: req.params.id};
    const data = await artist.findOne(filter);

    if(data){
        return res.status(200).send({success : true, artist : data});
    }
    else{
        return res.status(400).send({success : false, msg : "Data not found"});
    }
});


/**
 * Get all artists
 * @route GET /api/artist/getAll
 * @returns {object} 200 - An object containing all artist data.
 * @returns {object} 400 - An object containing an error message.
 */
router.get("/getAll", async (req,res) => {

    const data = await artist.find({});
    if(data){
        return res.status(200).send({success : true, artist : data});
    }
    else{
        return res.status(400).send({success : false, msg : "Data not found"});
    }
});



module.exports = router