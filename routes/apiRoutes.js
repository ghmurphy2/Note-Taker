//import database, add, fswrite to db.json
// post api route
const router = require('express').Router();
const path = require('path')

const note_data = require("../db/note_data");
app.get("/api/notes/", function(req,res) {
        res.json(note_data);
    });
module.exports = router; 
 