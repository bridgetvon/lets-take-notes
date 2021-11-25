const router = require('express').Router();
const fs = require('fs');
const storeNote = require('../db/store');


let notes = [{id:1, body: 'some text'}, {id:2, body:'some mre text'}];

//get post and delete routes 

router.get('/notes', (req, res) => {
    //call on store notes bc the function is in that file 
    storeNote.getNotes()
    .then((notes) => {
         return res.json(notes);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

router.post('api/notes', (req, res) => {
    // req.body = notes.length.toString();
    // if (!ValidateNote(req.body)) {
    //     res.status(400).send('Your note is not properly formatted!');
    // } else {
    //     const note = addNotes(req.body, notes);
    //     res.json(note);
    // }
    // fs.readFile(__dirname + '../db/db.json', 'utf-8')
    console.log(req.body);
    res.json(req.body);

});

router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id)
    const deleteNote = note.filter(item => item.id != req.params.id);
    note = deleteNote;
    return res.redirect('/');
});



module.exports = router;