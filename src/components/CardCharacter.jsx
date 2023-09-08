import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../routes/App';
import heart_fill from '../assets/img/heart_fill.svg';
import heart from '../assets/img/heart.svg';
import '@styles/components/CardCharacter.scss';

const CardCharacter = ({ character }) => {
  const navigate = useNavigate();

  const { favorites, setFavorites } = useContext(AppContext);

  const addFavorite = (favorite) => {
    const contextFavorites = [...favorites];
    favorite.isFavorite = true;
    contextFavorites.push(favorite);
    setFavorites(contextFavorites);
  };

  const removeFavorite = (favorite) => {
    const contextFavorites = [...favorites];
    favorite.isFavorite = false;
    const index = contextFavorites.findIndex((data) => data.id === favorite.id);
    contextFavorites.splice(index, 1);
    setFavorites(contextFavorites);
  };

  return (
    <div className="card Card--character">
      {character.isFavorite ? (
        <img
          className="card--heart"
          title="Remove favorite"
          src={heart_fill}
          alt="heart_fill"
          onClick={() => removeFavorite(character)}
        />
      ) : (
        <img
          className="card--heart"
          title="Add favorite"
          src={heart}
          alt="heart"
          onClick={() => addFavorite(character)}
        />
      )}
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{character.name}</h5>
        <button
          className="btn btn-primary Card--button"
          onClick={() => navigate(`/character/${character.id}`)}
        >
          Ver character
        </button>
      </div>
    </div>
  );
};

export default CardCharacter;
