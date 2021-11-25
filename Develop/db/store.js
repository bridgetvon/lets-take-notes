const util = require('util');
const fs = require('fs');
//automatically create an id
// const uuidv1 = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let notes = [{id:1, body: 'some text'}, {id:2, body:'some mre text'}];


class Store {
    //five functions
    read () {
        return readFileAsync('db/db.json', 'utf8');
    };

    write (note) {
        //create the notes
        return writeFileAsync('db/db.json', JSON.stringify(note));
    };

    getNotes () {
        //retrieve the notes 
        //call the read function in this function 
        return this.read().then(notes=> {
            let newNotes = JSON.parse(notes);
            console.log(newNotes);
            return newNotes;
        });
    };

    addNotes (newNote) {
        //within this function call the write function 
      //create a new note object 
        return this.getNotes().then(notes => {
        const newNote = [...notes, newNote];
        console.log(newNote);
        return this.write(newNote);

            // .then((updateNote) => this.write(updateNote))
            // .then(() => newNote);
        })
    };

    // deleteNote (id) {
        
    // }


}

module.exports =  new Store();