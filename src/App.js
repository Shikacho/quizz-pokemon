import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import "../src/styles/App.css";
import "../src/styles/footer.css"

function App() {
  return (
    <Router>
      <div>
        <h1>Quiz Pokémon - 1ère Génération</h1>
        <Quiz />       
        <footer>
          <p>
          Ce projet est un travail dérivé non officiel basé sur Pokémon. Les sprites officiels appartiennent à © Nintendo/Creatures Inc./GAME FREAK Inc.{" "}
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
