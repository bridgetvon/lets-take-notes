const util = require('util');
const fs = require('fs');
//automatically create an id
const {v4:uuidv4} = require('uuid');

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

  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

    addNotes (note) {
        const {title, text} = note;
        const newNote = {title, text, id: uuidv4()};
        //within this function call the write function 
      //create a new note object 
        return this.getNotes().then((notes) =>
        {return[...notes, newNote]}      
        ).then((updatedNotes) => 
        {return this.write(updatedNotes)}
        ).then(() => 
        {return newNote})
    };

    // deleteNote (id) {
        
    // }


}

module.exports =  new Store();