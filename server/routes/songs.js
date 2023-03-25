const router = require("express").Router();


const songs = require("../models/song");

/**
 * Get song by ID
 * @route POST /api/songs/save
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.name - The name of the song.
 * @param {string} req.body.imageURL - The URL of the song cover image.
 * @param {string} req.body.songURL - The URL of the song file.
 * @param {string} req.body.album - The name of the Album the song belongs to.
 * @param {string} req.body.artist - The name of the Artist the song belongs to.
 * @param {string} sreq.body.category - The URL of the song cover image.
 * @returns {Object} 200 - The saved song object 
 * @returns {Object} 400 - An error message if the song cannot be saved
 */
router.post("/save", async (req,res)  => {

        const newSong = new songs(
            {
                name : req.body.name,
                imageURL : req.body.imageURL,
                songURL : req.body.songURL,
                album : req.body.album,
                artist : req.body.artist,
                category : req.body.category,
            });
    try {
        const savedSong = await newSong.save();
        return res.status(200).send({success : true, songs : savedSong});
    } catch (error) {
        return res.status(400).send({success : false, msg : error});
    }        
});

/**
 * Get song by ID
 * @route GET /api/songs/getOne/{id}
 * @param {string} id.path.required - song ID.
 * @returns {object} 200 - An object containing the song data.
 * @returns {object} 400 - An object containing an error message.
 */
router.get("/getOne/:id", async (req,res)  => {
    const filter = {_id: req.params.id};
    const data = await songs.findOne(filter);

    if(data){
        return res.status(200).send({success : true, songs : data});
    }
    else{
        return res.status(400).send({success : false, msg : "Data not found"});
    }
});

/**
 * Get all songs
 * @route GET /api/songs/getAll
 * @returns {object} 200 - An object containing all songs data.
 * @returns {object} 400 - An object containing an error message.
 */
router.get("/getAll", async (req, res) => {
  
    const everything = await songs.find({});
    if (everything) {
      return res.status(200).send({ success: true, songs: everything });
    } else {
      return res.status(400).send({ success: false, msg: "No Data Found" });
    }
  });


module.exports = router