//import database, add, fswrite to db.json
// post api route
const router = require('express').Router();
const path = require('path')

const newNote = require("../db/db.json");
app.get("/api/notes/", function(req,res) {
        res.json(newNote);
    });

app.post("/api/notes/", function(req,res) {
        newNote.push(req.body);
        res.json(true);
    })
module.exports = router; 
 