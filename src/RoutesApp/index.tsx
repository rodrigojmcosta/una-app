import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Page from '../assets/layout/Page';
import CadastroAlunos from '../pages/Alunos/CadastroAlunos';
import CadastroLivros from '../pages/Livros/CadastroLivros';
import Home from '../pages/Home';

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
      <Route path="/livros/cadastro" element=
        {
          <Page content={<CadastroLivros />} />
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