// take user inport
// * `GET /notes` should return the `notes.html` file.

// `GET *` should return the `index.html` file.
const router = require('express').Router();
const path = require('path')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
 