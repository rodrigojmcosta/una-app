import { Divider } from "@mui/material";
import { LivroCardProps } from "../../../interfaces/props/LivroCardProps";
import LivroDetailFrame from "./LivroDetailFrame";
import './styles.css';
import { sxDivider } from "../../../assets/styles/CommonSxProps";

const LivroCard: React.FC<LivroCardProps> = ({ livro }) => {

  return (
    <div className='livro-card'>
      <div className='livro-icon-holder'>
        <img src={livro.ImagemLivro} alt={`Imagem da capa do livro ${livro.NomeLivro}`}
          className="img-livro"
        />
      </div>
      <div className='livro-card-details'>
        <LivroDetailFrame
          label='Código do livro: '
          value={livro.CodigoLivro.toString()}
        />
        <LivroDetailFrame
          label='Nome: '
          value={livro.NomeLivro}
        />
        <LivroDetailFrame
          label='Editora: '
          value={livro.Editora}
        />
        <LivroDetailFrame
          label='Categoria: '
          value={livro.Categoria}
        />
        <LivroDetailFrame
          label='Autor: '
          value={livro.Autor}
        />
        <LivroDetailFrame
          label='Ano: '
          value={livro.Ano.toString()}
        />
        <Divider sx={sxDivider}/>
        <LivroDetailFrame
          label='CPF do atual empossado: '
          value={livro.CPFAluno || '-'}
        />
        <LivroDetailFrame
          label='Status: '
          value={livro.Status}
        />
      </div>
    </div>
  )
};

export default LivroCard;
