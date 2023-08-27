import React, { useContext } from 'react';
import '@styles/containers/Favorites.scss';
import { AppContext } from '../routes/App';
import CardCharacter from '../components/CardCharacter';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="row mt-5">
      {favorites.map((character) => (
        <CardCharacter key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Favorites;
