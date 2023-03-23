const router = require("express").Router();


const songs = require("../models/song");

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


router.get("/getAll", async (req, res) => {
  
    const everything = await songs.find({});
    if (everything) {
      return res.status(200).send({ success: true, songs: everything });
    } else {
      return res.status(400).send({ success: false, msg: "No Data Found" });
    }
  });

router.put("/update/:id", async (req,res) => {
    
    const filter = {_id : req.params_id};
    const options = {
        upsert : true,
        new : true
    };
    
    try {
        const result = await songs.findOneAndUpdate(filter,{ 
            name : req.body.name,
            imageURL : req.body.imageURL,
            songsURL : req.body.songsURL,
            album : req.body.album,
            artist : req.body.artist,
            language : req.body.language,
            category : req.body.category,

        }, options );
        return res.status(200).send({success : true, data : result});
    } catch (error) {
        return res.status(400).send({success : false, msg: error});
    }
  
});


router.delete("/delete/:id", async (req,res) => {
    const filter = {_id: req.params.id};

    const result = await songs.deleteOne(filter);

    if(result){
        return res.status(200).send({success : true, msg : "Data Deleted"});
    }
    else{
        return res.status(400).send({success : false, msg : "Data not found"});
    }
});


module.exports = router