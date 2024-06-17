import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import { sxButton, sxInputSmall, sxLabel, sxLabeledOutlinedInput, sxTitle } from '../../../assets/styles/CommonSxProps';
import BackButton from '../../../components/BackButton';
import { LivroResponse } from '../../../interfaces/entities/Livro/LivroResponse';
import { devolveLivro, getLivroByCodigo } from '../../../services/LivroService';
import { onlyNumbers } from '../../../utils/OnlyNumbers';
import LivroCard from '../CatalogoLivros/LivroCard';

const DevolucaoLivros: React.FC = () => {

  const [codigoLivro, setCodigoLivro] = useState<string>('');
  const [searchedBook, setSearchedBook] = useState<LivroResponse>();

  const devolverLivro = async () => {
    const response = await devolveLivro(Number(codigoLivro));
    if (response?.status === 200) {
      alert('Devolução registrada com sucesso!');
      findLivroByCodigo();
    } else {
      alert(response?.data || 'Erro ao realizar reserva. Tente novamente em instantes');
    }
  }

  const findLivroByCodigo = async () => {
    const response = await getLivroByCodigo(Number(codigoLivro));
    if (response?.status === 200) {
      setSearchedBook(response.data);
    } else {
      alert('Livro não encontrado ou indisponível para reserva. Confira o código e tente novamente');
      setSearchedBook(undefined);
    }
  }

  return (
    <>
      <div className='feature-container'>
        <Typography sx={sxTitle}>Registrar uma Devolução</Typography>
        <Box sx={sxLabeledOutlinedInput}>
          <Typography component='label' sx={sxLabel}>Código do livro</Typography>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
            <OutlinedInput
              id='codigoLivro'
              placeholder='Digite o código'
              type={'text'}
              value={codigoLivro}
              onChange={(e) => {
                const numberCodigoLivro = onlyNumbers(e.target.value);
                setCodigoLivro(numberCodigoLivro);
              }}
              name='codigoLivro'
              maxRows={1}
              inputProps={{ maxLength: 9 }}
              sx={sxInputSmall}
            />
            <button className="search-button" onClick={findLivroByCodigo}>
              <u>Buscar</u> <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Box>
        </Box>
        {!!searchedBook &&
          <LivroCard livro={searchedBook} />
        }
        <Button
          variant="contained"
          size="large"
          type="button"
          onClick={devolverLivro}
          disabled={!searchedBook || searchedBook.Status === 'Disponível'}
          sx={sxButton}
        >
          <Typography>SALVAR DEVOLUÇÃO</Typography>
        </Button>
        <BackButton />
      </div>
    </>
  )
}

export default DevolucaoLivros;