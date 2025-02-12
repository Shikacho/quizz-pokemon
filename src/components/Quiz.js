import React, { useState, useEffect } from "react";
import pokemonData from "../data/pokemonData";
import PokemonAutocomplete from "../components/PokemonAutocomplete";
import "../styles/Quiz.css";

// Fonction pour enlever les accents
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[̀-ͯ]/g, "");
};

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [finalMessage, setFinalMessage] = useState("");
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [correctPokemonImage, setCorrectPokemonImage] = useState("");

  const [inputValue, setInputValue] = useState(""); 

  const getRandomQuestion = () => {
    const remainingPokemons = pokemonData.filter(
      (pokemon) => !askedQuestions.includes(pokemon.name)
    );

    if (remainingPokemons.length === 0) {
      setFinalMessage(`Bravo tu as trouvé ${score} Pokémon !`);
      return null;
    }

    const randomPokemon = remainingPokemons[Math.floor(Math.random() * remainingPokemons.length)];
    setAskedQuestions((prev) => [...prev, randomPokemon.name]);
    setCorrectPokemonImage("");

    return {
      question: `Indice : ${randomPokemon.description}`,
      answer: randomPokemon.name,
      image: randomPokemon.image,
    };
  };

  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setQuizStarted(false);
      setFinalMessage(`Bravo tu as trouvé ${score} Pokémon !`);
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(300);
    setScore(0);
    setUserAnswer(""); 
    setFeedback("");
    setFinalMessage("");
    setAskedQuestions([]);
    setCurrentQuestion(getRandomQuestion());
  };

  const handleCheckAnswer = () => {
    if (!currentQuestion) return;
  
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback("Bonne réponse !");
      setScore((prevScore) => prevScore + 1);
      setCorrectPokemonImage(currentQuestion.image);
  
      setUserAnswer("");
      setInputValue(""); 
  
      setTimeout(() => {
        setCurrentQuestion(getRandomQuestion());
        setCorrectPokemonImage("");
        setFeedback("");
      }, 2000);
    } else {
      setFeedback("Mauvaise réponse, essaie encore !");
      setUserAnswer("");
      setInputValue(""); 
  
      setTimeout(() => {
        setFeedback("");
      }, 2000);
    }
  };
  

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setScore(0);
    setUserAnswer("");
    setFeedback("");
    setFinalMessage("");
    setAskedQuestions([]);
    setCorrectPokemonImage("");
  };

  const handlePokemonSelect = (pokemonName) => {
    setUserAnswer(pokemonName);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && userAnswer.trim() !== "") {
      handleCheckAnswer();
    }
  };

  return (
    <div className="quiz-container" onKeyDown={handleKeyPress} tabIndex="0">
      <h2>Quiz Pokémon</h2>
      {!quizStarted ? (
        <>
          <p>{finalMessage}</p>
          <button onClick={handleStartQuiz}>Démarrer le quiz</button>
        </>
      ) : (
        <>
          <p>Temps restant : {timeLeft}s</p>
          <p>Score : {score}</p>
          <h3>Quel est ce Pokémon ?</h3>
          {currentQuestion && <p className="question">{currentQuestion.question}</p>}

          <div className="input-container">
            <PokemonAutocomplete
              inputValue={inputValue}
              setInputValue={setInputValue}
              onSelectPokemon={handlePokemonSelect}
            />
            <button id="validate-button" onClick={handleCheckAnswer}>Valider</button>
          </div>

          <p className={
            feedback === "Mauvaise réponse, essaie encore !" ? "incorrect-answer" :
            feedback === "Bonne réponse !" ? "correct-answer" : ""
          }>
            {feedback}
          </p>  
          {correctPokemonImage && (
            <div>
              <img
                src={correctPokemonImage}
                alt="Réponse correcte"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          )}

          <div className="restart-container">
            <button onClick={handleRestartQuiz}>Recommencer</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;

























