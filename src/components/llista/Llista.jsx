import Login from "../login/Login";
import Quizz from "../quizz/Quizz";
import Tresenratlla from "../tres-en-ratlla/Tresenratlla";
const Llista = [
  { path: "Login", titol: "Login", element: <Login /> },
  { path: "Quiz", titol: "Quiz", element: <Quizz /> },
  {
    path: "Tres-en-ratlla",
    titol: "Tres en ratlla",
    element: <Tresenratlla />,
  },
  { path: "Login2", titol: "Login", element: <Login /> },
  { path: "Login3", titol: "Login", element: <Login /> },
  { path: "Login4", titol: "Login", element: <Login /> },

  { path: "Quiz2", titol: "Quiz", element: <Quizz /> },
  { path: "Quiz3", titol: "Quiz", element: <Quizz /> },
  { path: "Quiz4", titol: "Quiz", element: <Quizz /> },
];

export default Llista;