import React, { useContext } from 'react';
import '@styles/containers/Favorites.scss';
import { AppContext } from '../routes/App';
import CardCharacter from '../components/CardCharacter';

const NotFoundFavorites = () => {
  return (
    <>
      <div className="Favorites--not-found">
        <h1 className="gradient-text">NO TIENES FAVORITOS AGREGADOS </h1>
        <span>🥲</span>
      </div>
    </>
  );
};

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="row mt-5">
      {favorites.length > 0 ? (
        favorites.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))
      ) : (
        <NotFoundFavorites />
      )}
    </div>
  );
};

export default Favorites;
