import React, { useState, createContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

import Character from '../containers/Character';
import Favorites from '../containers/Favorites';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

export const AppContext = createContext([]);

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/character/:character" element={<Character />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
