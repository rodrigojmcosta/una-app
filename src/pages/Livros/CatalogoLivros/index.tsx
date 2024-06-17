import { Box, OutlinedInput, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { sxDarkGreyBody, sxInputLarge, sxLabel, sxLabeledOutlinedInput, sxTitle } from '../../../assets/styles/CommonSxProps';
import BackButton from '../../../components/BackButton';
import { LivroResponse } from '../../../interfaces/entities/Livro/LivroResponse';
import { getLivros } from '../../../services/LivroService';
import LivroCard from './LivroCard';
import './styles.css';

const CatalogoLivros: React.FC = () => {

  const [livros, setLivros] = useState<LivroResponse[]>([]);
  const [filteredLivros, setFilteredLivros] = useState<LivroResponse[]>([]);
  const [queryText, setQueryText] = useState<string>('');

  useEffect(() => {
    fetchLivros();
  }, [])

  useEffect(() => {
    const filteredLivros = filterLivros(queryText, livros);
    setFilteredLivros(filteredLivros);
  }, [queryText, livros]);

  const fetchLivros = async () => {
    const response = await getLivros();
    if (response?.status === 200) {
      setLivros(response.data);
    } else {
      console.error(response);
    }
  }

  const filterLivros = (filterText: string, livros: LivroResponse[]) => {
    if (filterText.length < 3) {
      return livros;
    }

    return livros.filter(livro => {
      const nomeLivro = livro.NomeLivro.toLowerCase();
      const editora = livro.Editora.toLowerCase();
      const autor = livro.Autor.toLowerCase();
      const categoria = livro.Categoria.toLowerCase();
      const filterLower = filterText.toLowerCase();

      return nomeLivro.includes(filterLower) || editora.includes(filterLower) || autor.includes(filterLower) || categoria.includes(filterLower);
    });
  };

  return (
    <>
      <div className='feature-container'>
        <Typography sx={sxTitle}>Catálogo de livros</Typography>
        <Box sx={sxLabeledOutlinedInput}>
          <Typography sx={sxLabel}>Buscar</Typography>
          <label htmlFor='buscar' arial-label='buscar' />
          <OutlinedInput
            id='buscar'
            placeholder='Digite nome do livro, editora ou autor'
            type={'text'}
            value={queryText}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-ZçÇáéíóúÁÉÍÓÚãõÃÕ\s]/g, '');
              setQueryText(value);
            }}
            name='Procurar'
            inputProps={{ maxLength: 30 }}
            maxRows={1}
            sx={sxInputLarge}
          />
        </Box>
        <div className='livro-cards-holder'>
          {filteredLivros.length > 0 ?
            <>
              {filteredLivros.map((livro, index) =>
                <LivroCard livro={livro} key={index} />
              )}
            </>
            :
            <Typography sx={sxDarkGreyBody}>Nenhum livro encontrado.</Typography>
          }
        </div>
        <BackButton />
      </div>
    </>
  )
}

export default CatalogoLivros;