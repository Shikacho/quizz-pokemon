import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../src/styles/App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Quiz />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
