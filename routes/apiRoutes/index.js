const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNewNote, checkNote, setNoteID, deleteNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    const noteData = notes
    res.json(noteData)
});


router.post('/notes', (req, res) => {
    const noteData = notes
    req.body.id = setNoteID()
    const note = req.body

    if (checkNote(note)) {
         res.json(createNewNote(note, noteData))
    } else {
        res.status(400).send('This note was note properly formatted.')
    }
});

module.exports = router