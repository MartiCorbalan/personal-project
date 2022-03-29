import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./component/NotesList";
import Search from "./component/Search";
import Header from "./component/Header";
//MAIN
const Notes = () => {
  const [notes, setNotes] = useState([
   
    
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    //react-notes-app-data es la key que hemos puesto en el localStorage del useEffect de abajo
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"))
    //si hay algo en el localStorage lo guardamos en notes
    if(savedNotes){
     
      setNotes(savedNotes)
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    //cuando algo cambie en notes, se ejecuta el localStorage
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    /* nuevo array para guardar las notas creadas */
    /* en lugar de actualizar la matriz anterior */
    const newNotes = [...notes, newNote];
    /* y le pasamos al estado la nueva lista */
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        {/* ponemos el setSearchText para actualizar el estado de nuestro texto de busqueda */}
        <Search handleSearchNote={setSearchText} />
        {/* handleAddNote se crea aqui, para poder pasar la funcion entre componentes */}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default Notes;
