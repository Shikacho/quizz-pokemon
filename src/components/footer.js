import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Ce projet est un travail dérivé non officiel basé sur Pokémon. Les sprites officiels appartiennent à © Nintendo/Creatures Inc./GAME FREAK Inc.</p>
      <p className="resources">
        <span>Ressources via : </span>
        <a href="https://github.com/PokeAPI/" target="_blank" rel="noopener noreferrer">
          PokeAPI
        </a>
      </p>
    </footer>
  );
};

export default Footer;

