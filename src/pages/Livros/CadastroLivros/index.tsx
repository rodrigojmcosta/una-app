import { Box, Button, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import { sxButton, sxFilterSelect, sxFormBox, sxFormError, sxInputSmall, sxLabel, sxLabeledOutlinedInput, sxTitle } from '../../../assets/styles/CommonSxProps';
import BackButton from '../../../components/BackButton';
import { CadastrarLivroRequest } from '../../../interfaces/entities/Livro/CadastrarLivroRequest';
import { CadastrarLivroValidation } from '../../../interfaces/validation/Livro/CadastrarLivroValidation';
import { cadastraLivro } from '../../../services/LivroService';
import { onlyNumbers } from '../../../utils/OnlyNumbers';

const CadastroLivros: React.FC = () => {

  const generoList = [
    'Ação', 'Aventura', 'Biografia', 'Ciência', 'Fantasia',
    'História', 'Mistério', 'Romance', 'Terror', 'Thriller'
  ];

  const formik = useFormik<CadastrarLivroRequest>({
    initialValues: {
      codigoLivro: '',
      nome: '',
      autor: '',
      editora: '',
      ano: '',
      categoria: '',
      imagemLivro: '',
      status: 'Disponível'
    },
    onSubmit: (values) => {
      values.ano = Number(values.ano);
      values.codigoLivro = Number(values.codigoLivro);
      cadastrarLivro(values);
    },
    validationSchema: CadastrarLivroValidation,
    validateOnChange: false
  });

  const cadastrarLivro = async (livro: CadastrarLivroRequest) => {
    const response = await cadastraLivro(livro);
    if (response?.status === 201) {
      alert('Livro cadastrado com sucesso!');
    } else {
      console.error(response);
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

  return (
    <>
      <div className='feature-container'>
        <Typography sx={sxTitle}>Cadastrar um livro</Typography>
        <form onSubmit={formik.handleSubmit} className="width-100">
          <Box sx={sxFormBox}>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Código do livro</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='codigoLivro'
                  placeholder='Digite o código'
                  type={'text'}
                  value={formik.values.codigoLivro}
                  onChange={(e) => { handleInputChange(e, 'codigoLivro', onlyNumbers, formik) }}
                  name='codigoLivro'
                  error={!!formik.errors.codigoLivro}
                  maxRows={1}
                  inputProps={{ maxLength: 9 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.codigoLivro}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Nome</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='nome'
                  placeholder='Digite o nome'
                  type={'text'}
                  value={formik.values.nome}
                  onChange={(e) => { formik.setFieldValue('nome', e.target.value) }}
                  name='nome'
                  error={!!formik.errors.nome}
                  maxRows={1}
                  inputProps={{ maxLength: 30 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.nome}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Autor</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='autor'
                  type={'text'}
                  placeholder='Digite o autor'
                  value={formik.values.autor}
                  onChange={(e) => { formik.setFieldValue('autor', e.target.value) }}
                  name='autor'
                  error={!!formik.errors.autor}
                  maxRows={1}
                  inputProps={{ maxLength: 15 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.autor}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Editora</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='editora'
                  placeholder='Digite a editora'
                  type={'text'}
                  value={formik.values.editora}
                  onChange={(e) => { formik.setFieldValue('editora', e.target.value) }}
                  name='editora'
                  error={!!formik.errors.editora}
                  maxRows={1}
                  inputProps={{ maxLength: 30 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.editora}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Ano</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='ano'
                  placeholder='Digite o ano'
                  type={'text'}
                  value={formik.values.ano}
                  onChange={(e) => { handleInputChange(e, 'ano', onlyNumbers, formik) }}
                  name='ano'
                  error={!!formik.errors.ano}
                  maxRows={1}
                  inputProps={{ maxLength: 4 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.ano}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Categoria</Typography>
              <Select
                id='categoria'
                value={formik.values.categoria}
                renderValue={
                  formik.values.categoria !== "" ? undefined : () => <span className='placeholder'>Selecione a categoria</span>
                }
                displayEmpty
                onChange={(e) => formik.setFieldValue('categoria', e.target.value)}
                sx={sxFilterSelect}
              >
                {generoList.map((genero, index) => (
                  <MenuItem key={index} value={genero}>{genero}</MenuItem>
                ))}
              </Select>
              <Typography sx={sxFormError}>{formik.errors.categoria}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Link da Imagem da Capa</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='imagemLivro'
                  placeholder='Cole aqui o link da imagem da capa do livro'
                  type={'text'}
                  value={formik.values.imagemLivro}
                  onChange={(e) => { formik.setFieldValue('imagemLivro', e.target.value) }}
                  name='imagemLivro'
                  error={!!formik.errors.imagemLivro}
                  maxRows={1}
                  inputProps={{ maxLength: 300 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.imagemLivro}</Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={sxButton}
            >
              <Typography>CADASTRAR</Typography>
            </Button>
            <BackButton />
          </Box>
        </form>
      </div>
    </>
  )
}

export default CadastroLivros;