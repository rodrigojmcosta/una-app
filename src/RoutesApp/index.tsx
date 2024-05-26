import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Exercicios from '../pages/ExerciciosPage';
import Home from '../pages/Home';
import PokemonPage from '../pages/PokemonPage';

const RoutesApp: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/exercicios" element={<Exercicios />} />
      <Route path="/pokemon" element={<PokemonPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default RoutesApp; 