import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./component/NotesList";
import Search from "./component/Search";
import Header from "./component/Header";
//MAIN
const Notes = () => {
  const [notes, setNotes] = useState([
    /* {
      id: nanoid(),
      text: "primera nota",
      date: "10/03/2022",
    },
    {
      id: nanoid(),
      text: "segona nota",
      date: "10/03/2022",
    },
    {
      id: nanoid(),
      text: "tercer nota",
      date: "10/03/2022",
    }, */
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

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
