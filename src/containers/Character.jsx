import React, { useCallback, useEffect, useState } from 'react';
import '@styles/containers/Character.scss';
import alien from '@images/alien.svg';
import human from '@images/human.svg';
import { getCharacter } from '../api/Services';
import { useParams } from 'react-router-dom';

const Character = () => {
  const params = useParams();
  const [character, setCharacter] = useState({});
  const [show, setShow] = useState(false);

  const getInfoCharacter = useCallback(async () => {
    const dataCharacter = await getCharacter(params.character);
    if (dataCharacter.status !== 500) {
      setCharacter(dataCharacter);
      setShow(true);
    }
  });

  useEffect(() => {
    getInfoCharacter();
  }, [params.character]);

  const CardCharacter = ({ character }) => {
    return (
      <div className="card Card--grid-character">
        <div className="card-body">
          <img className="img-fluid" src={character.image} alt="character" />
          <div className="d-flex justify-content-center mt-2">
            <img
              src={character.species == 'Alien' ? alien : human}
              className="Card--img-species"
              alt="species-img"
            />
            <h3 className="m-0">{character.name}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="content-grid mt-5">
        {show && <CardCharacter character={character} />}
      </div>
    </>
  );
};

export default Character;
