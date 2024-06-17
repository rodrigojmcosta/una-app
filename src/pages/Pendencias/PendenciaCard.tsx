import { PendenciaResponse } from "../../interfaces/entities/PendenciaResponse";
import { cpfMask } from "../../utils/CpfMask";
import LivroDetailFrame from "./PendenciaDetailFrame";
import './styles.css';

const PendenciaCard: React.FC<{ pendencia: PendenciaResponse }> = ({ pendencia }) => {

  return (
    <div className='pendencia-card'>
      <div className='pendencia-card-details'>
        <LivroDetailFrame
          label='Nome do livro: '
          value={pendencia.NomeLivro}
        />
        <LivroDetailFrame
          label='Código do livro: '
          value={pendencia.CodigoLivro.toString()}
        />
        <LivroDetailFrame
          label='Nome do aluno: '
          value={pendencia.NomeAluno}
        />
        <LivroDetailFrame
          label='CPF do aluno: '
          value={!!pendencia.CPFAluno ? cpfMask(pendencia.CPFAluno) : '-'}
        />
        <LivroDetailFrame
          label='Telefone do aluno: '
          value={pendencia.Telefone}
        />
      </div>
    </div>
  )
};

export default PendenciaCard;
