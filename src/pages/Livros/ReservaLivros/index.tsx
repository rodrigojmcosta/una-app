import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import { useState } from 'react';
import { sxButton, sxFormBox, sxFormError, sxInputSmall, sxLabel, sxLabeledOutlinedInput, sxTitle } from '../../../assets/styles/CommonSxProps';
import BackButton from '../../../components/BackButton';
import { LivroResponse } from '../../../interfaces/entities/Livro/LivroResponse';
import { RegistarEmprestimoValidation } from '../../../interfaces/validation/Livro/RegistrarEmprestimoValidation';
import { getLivroByCodigo, reservaLivro } from '../../../services/LivroService';
import { cpfMask } from '../../../utils/CpfMask';
import { onlyNumbers } from '../../../utils/OnlyNumbers';
import LivroCard from '../CatalogoLivros/LivroCard';

const ReservaLivros: React.FC = () => {

  const [codigoLivro, setCodigoLivro] = useState<string>('');
  const [searchedBook, setSearchedBook] = useState<LivroResponse>();

  const formik = useFormik({
    initialValues: {
      cpfAluno: ''
    },
    onSubmit: (values) => {
      values.cpfAluno = clearInput(values.cpfAluno);
      reservarLivro(values.cpfAluno, codigoLivro);
    },
    validationSchema: RegistarEmprestimoValidation,
    validateOnChange: false
  });

  function clearInput(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  const reservarLivro = async (cpfAluno: string, codigoLivro: string) => {
    const response = await reservaLivro(cpfAluno, Number(codigoLivro));
    if (response?.status === 200) {
      alert('Livro reservado com sucesso!');
      findLivroByCodigo();
    } else {
      alert(response?.data || 'Erro ao realizar reserva. Tente novamente em instantes');
    }
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    mask: (inputValue: string) => string | null,
    formik: FormikProps<any>
  ) => {
    const { value } = (event.target as HTMLInputElement);
    formik.setFieldValue(field, mask ? mask(value) : value);
  };

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
        <Typography sx={sxTitle}>Registrar uma Reserva</Typography>
        <form onSubmit={formik.handleSubmit} className="width-100">
          <Box sx={sxFormBox}>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>CPF do Aluno</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='cpfAluno'
                  placeholder='Digite o CPF do aluno que fará a reserva'
                  type={'text'}
                  value={formik.values.cpfAluno}
                  onChange={(e) => { handleInputChange(e, 'cpfAluno', cpfMask, formik) }}
                  name='cpf'
                  error={!!formik.errors.cpfAluno}
                  maxRows={1}
                  inputProps={{ maxLength: 14 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.cpfAluno}</Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={!searchedBook || searchedBook.Status !== 'Disponível'}
              sx={sxButton}
            >
              <Typography>RESERVAR</Typography>
            </Button>
          </Box>
        </form>
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
        <BackButton />
      </div>
    </>
  )
}

export default ReservaLivros;