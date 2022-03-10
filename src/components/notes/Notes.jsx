import { useState } from "react";
import NotesList from "./component/NotesList";
import { nanoid } from "nanoid";
//MAIN
const Notes = () => {
  const [notes, setNotes] = useState([
    {
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
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default Notes;
