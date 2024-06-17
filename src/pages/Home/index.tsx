import { faAdd, faBookAtlas, faBookOpen, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import './styles.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='home-content'>
      <h1 className='h1-meus-atalhos'>Atalhos</h1>
      <div className='container-shortcuts-painel'>
        <FeatureCard feature={"Cadastrar Aluno"} icon={faUserGraduate}
          to={() => navigate("/alunos/cadastro")} iconDimensionClass='fa-icon32x32'
        />
        <FeatureCard feature={"Cadastrar Livro"} icon={faBookOpen}
          to={() => navigate("/livros/cadastro")} iconDimensionClass='fa-icon32x32'
        />
        <FeatureCard feature={"Consultar Livros"} icon={faBookAtlas}
          to={() => navigate("/livros/catalogo")} iconDimensionClass='fa-icon32x32'
        />
        <FeatureCard feature={"Cadastrar Reserva"} icon={faAdd}
          to={() => navigate("/livros/reserva")} iconDimensionClass='fa-icon32x32'
        />
      </div>
    </div>
  )
}

export default Home