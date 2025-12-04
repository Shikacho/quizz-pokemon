import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Ce projet est un travail dérivé non officiel basé sur Pokémon. Les
        sprites officiels appartiennent à © Nintendo/Creatures Inc./GAME FREAK
        Inc.
      </p>

      <p className="resources">
        <span>Ressources via : </span>
        <a
          href="https://github.com/PokeAPI/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PokeAPI
        </a>
      </p>

      <div className="bmc">
        <a
          href="https://buymeacoffee.com/shika"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy Me a Coffee — shika"
        >
          <svg
            className="bmc-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            role="img"
            aria-hidden="true"
          >
            <rect width="256" height="256" rx="48" fill="#FFDD00" />
            <g transform="translate(44,56)">
              <rect
                x="0"
                y="32"
                width="120"
                height="72"
                rx="16"
                fill="#111111"
              />
              <path d="M120 48h18a14 14 0 1 1 0 28h-18z" fill="#111111" />
              <rect
                x="24"
                y="24"
                width="16"
                height="16"
                rx="8"
                fill="#111111"
              />
              <rect
                x="48"
                y="18"
                width="16"
                height="22"
                rx="8"
                fill="#111111"
              />
              <rect
                x="72"
                y="24"
                width="16"
                height="16"
                rx="8"
                fill="#111111"
              />
              <rect
                x="28"
                y="112"
                width="64"
                height="10"
                rx="5"
                fill="#111111"
                opacity=".9"
              />
            </g>
          </svg>
        </a>

        <a
          href="https://buymeacoffee.com/shika"
          target="_blank"
          rel="noopener noreferrer"
          className="bmc-text"
        >
          <strong>Site réalisé par Shika</strong> — <u>Pour me soutenir</u>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
