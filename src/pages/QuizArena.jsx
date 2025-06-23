import React, { useState } from 'react';
import './Quiz.scss';

const questions = [
  { question: "Who is the king of Greek gods?", options: ["Zeus", "Apollo", "Poseidon", "Hermes"], answer: "Zeus" },
  { question: "Who is the Hindu god of destruction?", options: ["Vishnu", "Brahma", "Shiva", "Indra"], answer: "Shiva" },
  { question: "Who is the Egyptian god of the sun?", options: ["Ra", "Osiris", "Anubis", "Thoth"], answer: "Ra" },
  { question: "Who is the Greek god of the sea?", options: ["Hades", "Poseidon", "Hermes", "Ares"], answer: "Poseidon" },
  { question: "Which Hindu goddess is associated with wealth?", options: ["Lakshmi", "Saraswati", "Kali", "Durga"], answer: "Lakshmi" },
  { question: "Who ferries souls across the river Styx?", options: ["Hades", "Charon", "Hermes", "Zeus"], answer: "Charon" },
  { question: "Which god has an elephant head?", options: ["Vishnu", "Ganesha", "Shiva", "Brahma"], answer: "Ganesha" },
  { question: "Who is the Greek god of war?", options: ["Ares", "Apollo", "Hermes", "Hephaestus"], answer: "Ares" },
  { question: "What animal is sacred to Anubis?", options: ["Dog", "Falcon", "Jackal", "Cat"], answer: "Jackal" },
  { question: "Who is the Greek goddess of wisdom?", options: ["Athena", "Hera", "Artemis", "Demeter"], answer: "Athena" },
  { question: "Which god is known as the preserver in Hinduism?", options: ["Shiva", "Brahma", "Vishnu", "Ganesha"], answer: "Vishnu" },
  { question: "Which goddess rides a lion?", options: ["Lakshmi", "Saraswati", "Durga", "Radha"], answer: "Durga" },
  { question: "Who is the Greek messenger god?", options: ["Hermes", "Zeus", "Apollo", "Ares"], answer: "Hermes" },
  { question: "Osiris is the Egyptian god of?", options: ["Sun", "Death", "Rain", "War"], answer: "Death" },
  { question: "Which goddess is known for music and learning in Hinduism?", options: ["Lakshmi", "Durga", "Saraswati", "Parvati"], answer: "Saraswati" }
];

const QuizArena = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    if (option === questions[current].answer) {
      setScore(prev => prev + 1);
    }
    setTimeout(() => {
      setCurrent(prev => prev + 1);
      setAnswered(false);
      setSelected(null);
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
  };

  if (current >= questions.length) {
    return (
      <div className="quiz-container">
        <h2>🎉 Quiz Complete!</h2>
        <p>Your score: <strong>{score}</strong> / {questions.length}</p>
        <button className="restart-btn" onClick={restartQuiz}>🔄 Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>🧠 Mythology Quiz Arena</h2>
      <div className="question-box">
        <h3>{questions[current].question}</h3>
        <div className="options">
          {questions[current].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className={`option-btn ${
                answered && option === questions[current].answer
                  ? 'correct'
                  : answered && option === selected
                  ? 'wrong'
                  : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="question-counter">Question {current + 1} of {questions.length}</p>
      </div>
    </div>
  );
};

export default QuizArena;
