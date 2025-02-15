import React, { useState, useEffect, useRef } from "react";

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[̀-ͯ]/g, "");
};

const PokemonAutocomplete = ({ onSelectPokemon, inputValue, setInputValue, pokemonData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const autocompleteRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filteredSuggestions = pokemonData.filter((pokemon) =>
        removeAccents(pokemon.name.toLowerCase()).startsWith(removeAccents(value.toLowerCase()))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (pokemonName) => {
    setInputValue(pokemonName);
    setSuggestions([]);
    onSelectPokemon(pokemonName);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="autocomplete-container" ref={autocompleteRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Entrez le nom d'un Pokémon"
      />
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((pokemon) => (
            <div
              key={pokemon.name}
              onClick={() => handleSuggestionClick(pokemon.name)}
              className="suggestion-item"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="suggestion-item-image"
              />
              {pokemon.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonAutocomplete;



