import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import Header from "./components/Header"; 
import "../src/styles/App.css";
import "../src/styles/footer.css";

function App() {
  return (
    <Router>
      <div>
        <Header /> 
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