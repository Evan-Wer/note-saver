const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');


//Create a new note
function createNewNote(note, notes) {
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notes, null, 2));
    return note;
};

//Setting note ID
function setNoteID() {
    return uniqid.time()
};

//Check new notes
function checkNote(note) {
    if (!note.title) {
        return false;
    }
    if (!note.text) {
        return false;
    }
    return true;
};



module.exports = {
    createNewNote,
    checkNote,
    setNoteID,
    deleteNote
};