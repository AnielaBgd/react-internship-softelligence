import React, { useEffect, useState } from 'react';

const useFetchCharacters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = (ids) => {
    setIsLoading(true);
    setCharacters([]);
    fetch(`https://rickandmortyapi.com/api/character/${ids}`)
      .then((response) => response.json())
      .then((response) => {
        const results = response || [];
        if ( results.length > 0 ) {
          setCharacters(results);
          setIsLoading(false);
        }
      });
  };

  return [
   {
      characters,
      isLoading
    },
    fetchCharacters
  ];
};

export default useFetchCharacters;