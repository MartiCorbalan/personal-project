import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  //event es el valor del textarea, el que se escribe en el textarea
  const handleChange = (event) => {
    /* si el limite de caracteres no llegue a 0, ejecutara la funcion,
      pero si sobrepasa el 0, no entrara a la funcion y no escribira mas
       */
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  //esta funcion actualiza el estado con la nueva nota
  const handleSaveClick = () => {
    /* .trim elimina el espacio en blanco desde el principio y el final de un string */
    /* si esta vacio, no entrara dentro y no añadira nada */
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      /* dejar el estado vacio despues de añadir una nota */
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Escriu per afegir una nota..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>
          {/* restamos al total de caracteres la longitud de valores(letras) que escribe el usuario */}
          {characterLimit - noteText.length} caràcters
        </small>
        <button className="save" onClick={handleSaveClick}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default AddNote;
