import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { sxTitle } from '../../../assets/styles/CommonSxProps';
import { LivroResponse } from '../../../interfaces/entities/Livro/LivroResponse';
import { getLivros } from '../../../services/LivroService';
import LivroCard from './LivroCard';
import './styles.css';

const CatalogoLivros: React.FC = () => {

  const [livros, setLivros] = useState<LivroResponse[]>([]);

  useEffect(() => {
    fetchLivros();
  }, [])


  const fetchLivros = async () => {
    const response = await getLivros();
    if (response?.status === 200) {
      setLivros(response.data);
    } else {
      console.error(response);
    }
  }

  return (
    <>
      <div className='feature-container'>
        <Typography sx={sxTitle}>Catálogo de livros</Typography>
        <div className='livro-cards-holder'>
          {livros.length > 0 &&
            <>
              {livros.map((livro, index) =>
                <LivroCard livro={livro} key={index} />
              )}
            </>
          }
        </div>
      </div>
    </>
  )
}

export default CatalogoLivros;