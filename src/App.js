import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../src/styles/App.css";
import "../src/styles/footer.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
