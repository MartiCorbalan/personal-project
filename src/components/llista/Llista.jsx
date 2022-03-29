import Login from "../login/Login";
import Quizz from "../quizz/Quizz";
import Tresenratlla from "../tres-en-ratlla/Tresenratlla";
import Notes from "../notes/Notes";
const Llista = [
  { path: "Login", titol: "Login", element: <Login /> },
  { path: "Quiz", titol: "Quiz",  element: <Quizz /> },
  {
    path: "Tres-en-ratlla",
    titol: "Tres en ratlla",
    element: <Tresenratlla />,
  },
  { path: "Bloc-de-notes", titol: "Bloc de notes", element: <Notes /> },
 
];

export default Llista;
