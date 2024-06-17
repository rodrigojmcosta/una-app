import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Page from '../assets/layout/Page';
import CadastroAlunos from '../pages/Alunos/CadastroAlunos';
import Home from '../pages/Home';
import CadastroLivros from '../pages/Livros/CadastroLivros';
import CatalogoLivros from '../pages/Livros/CatalogoLivros';
import ReservaLivros from '../pages/Livros/ReservaLivros';
import Pendencias from '../pages/Pendencias';
import DevolucaoLivros from '../pages/Livros/DevolucaoLivros';

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
      <Route path="/livros/catalogo" element=
        {
          <Page content={<CatalogoLivros />} />
        }
      />
      <Route path="/reserva" element=
        {
          <Page content={<ReservaLivros />} />
        }
      />
      <Route path="/pendencias" element=
        {
          <Page content={<Pendencias />} />
        }
      />
      <Route path="/devolucao" element=
        {
          <Page content={<DevolucaoLivros />} />
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