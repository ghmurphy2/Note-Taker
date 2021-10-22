//import database, add, fswrite to db.json
// post api route
const router = require('express').Router();
const path = require('path')

const newNote = require("../db/db.json");
router.get("/api/notes/", function(req,res) {
        res.json(newNote);
    });

router.post("/api/notes/", function(req,res) {
        newNote.push(req.body);
        res.json(true);
        fs.writeFile(newNote, JSON.stringify(db, null, '\t'), err => err ? console.error(err) : null)
});
    
module.exports = router; 