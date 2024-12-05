const fs = require('fs')

const getNotes = function () {
    return 'your notes'
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const dupeNote = notes.filter((note) => {
        return note.title === title
    })

    if(dupeNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        console.log('new note added!')
    } else {
        console.log('Note taken');
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const matchNote = notes.filter((note) => {
        return title === note.title;
    })

    console.log(matchNote)

    if(matchNote.title === title) {
        console.log('deleting note')
        // saveNotes(notes);
    } else {
        console.log('no note of that name')
    }

    // console.log(title)
    // console.log('removing', title)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};