import React, { useState, useEffect, useContext } from 'react';
import CardCharacter from '@components/CardCharacter';
import { getCharacters } from '../api/Services';
import { AppContext } from '../routes/App';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites } = useContext(AppContext);

  const getCharactersService = async () => {
    try {
      const response = await getCharacters();
      if (favorites.length > 0) checkFavoritesCharacter(response.results);
      else setCharacters(response.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  const checkFavoritesCharacter = (results) => {
    let contextFavorite = [...favorites];
    results.forEach((character) => {
      character.isFavorite = contextFavorite.some(
        (data) => data.id === character.id
      )
        ? true
        : false;
    });
    setCharacters(results);
  };

  useEffect(() => {
    console.log('useEffect');
    getCharactersService();
  }, []);

  return (
    <div className="row mt-5">
      {characters.map((character) => (
        <CardCharacter key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Home;
