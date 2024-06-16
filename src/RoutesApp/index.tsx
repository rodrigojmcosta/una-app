import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Page from '../assets/layout/Page';
import Home from '../pages/Home';
import PokemonPage from '../pages/PokemonPage';

const RoutesApp: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element=
        {
          <Page content={<Home />} />
        }
      />
      <Route path="/pokemon" element=
        {
          <Page content={<PokemonPage />} />
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default RoutesApp; 