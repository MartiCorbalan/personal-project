import React, { useState } from "react";
export default function Quizz() {
  const questions = [
    {
      pregunta: "Quina és la capital de França?",
      respostaOptions: [
        { respostaText: "New York", isCorrect: false },
        { respostaText: "London", isCorrect: false },
        { respostaText: "Paris", isCorrect: true },
        { respostaText: "Dublin", isCorrect: false },
      ],
    },
    {
      pregunta: "Qui es el CEO de Tesla?",
      respostaOptions: [
        { respostaText: "Jeff Bezos", isCorrect: false },
        { respostaText: "Elon Musk", isCorrect: true },
        { respostaText: "Bill Gates", isCorrect: false },
        { respostaText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      pregunta: "Quina companyia va crear Iphone?",
      respostaOptions: [
        { respostaText: "Apple", isCorrect: true },
        { respostaText: "Intel", isCorrect: false },
        { respostaText: "Amazon", isCorrect: false },
        { respostaText: "Microsoft", isCorrect: false },
      ],
    },
    {
      pregunta: "Quants llibres de Harry Potter hi ha?",
      respostaOptions: [
        { respostaText: "1", isCorrect: false },
        { respostaText: "4", isCorrect: false },
        { respostaText: "6", isCorrect: false },
        { respostaText: "7", isCorrect: true },
      ],
    },
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);

  const [mostrarResultat, setMostrarResultat] = useState(false);

  const [puntuacio, setPuntuacio] = useState(0);

  const handleAnswerClick = (esCorrecte) => {
    console.table(questions);
    if (esCorrecte === true) {
      setPuntuacio(puntuacio + 1);
    }
    const nextPregunta = preguntaActual + 1;
    if (nextPregunta < questions.length) {
      setPreguntaActual(nextPregunta);
    } else {
      setMostrarResultat(true);
    }
  };

  const clear = () => {
    // Limpia todos los valores
    setPreguntaActual(0);
    setMostrarResultat(false);
    setPuntuacio(0);
  };

  return (
    <div className="quiz">
      {mostrarResultat ? (
        <>
          <div className="score-section">
            has encertat {puntuacio} de {questions.length}
            <button className="btn btn-danger" onClick={clear}>
              Restart
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {preguntaActual + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[preguntaActual].pregunta}
            </div>
          </div>
          <div className="answer-section">
            {questions[preguntaActual].respostaOptions.map(
              (respostaOptions) => (
                <button
                  className="btn-quiz"
                  onClick={() => handleAnswerClick(respostaOptions.isCorrect)}
                >
                  {respostaOptions.respostaText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
