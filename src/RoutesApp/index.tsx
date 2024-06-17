import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Page from '../assets/layout/Page';
import Home from '../pages/Home';
import CadastroAlunos from '../pages/CadastroAlunos';

const RoutesApp: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element=
        {
          <Page content={<Home />} />
        }
      />
      <Route path="/alunos/cadastro" element=
        {
          <Page content={<CadastroAlunos />} />
        }
      />
      {/* <Route path="/pokemon" element=
        {
          <Page content={<PokemonPage />} />
        }
      /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default RoutesApp; 