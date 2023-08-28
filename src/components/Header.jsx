import React, { useEffect } from 'react';
import '@styles/components/Header.scss';
import logo from '@images/logo.png';
import logo_mini from '@images/logo_mini.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="Header">
      <img
        src={logo_mini}
        onClick={() => navigate('/')}
        className="Header--mini-logo"
        alt="logo_mini"
      />
      <div className="Header--container-logo">
        <img
          src={logo}
          onClick={() => navigate('/')}
          className="Header--logo"
          alt="ricky&morty"
        />
      </div>
      {location.pathname == '/favorites' ? (
        <button className="btn btn-outline-light" onClick={() => navigate('/')}>
          Home
        </button>
      ) : (
        <button
          className="btn btn-outline-light"
          onClick={() => navigate('/favorites')}
        >
          Favorites
        </button>
      )}
    </header>
  );
};

export default Header;
