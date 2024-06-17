import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import { sxButton, sxFormBox, sxFormError, sxInputSmall, sxLabel, sxLabeledOutlinedInput, sxTitle } from '../../../assets/styles/CommonSxProps';
import { CadastrarAlunoRequest } from '../../../interfaces/entities/Aluno/CadastrarAlunoRequest';
import { CadastrarAlunoValidation } from '../../../interfaces/validation/Aluno/CadastrarAlunoValidation';
import { cadastrarFichaAluno } from '../../../services/AlunoService';
import { cellPhoneMask } from '../../../utils/CellPhoneMask';
import { cpfMask } from '../../../utils/CpfMask';
import BackButton from '../../../components/BackButton';

const CadastroAlunos: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      matricula: '',
      cpf: ''
    },
    onSubmit: (values) => {
      values.cpf = clearInput(values.cpf);
      cadastrarAluno(values);
    },
    validationSchema: CadastrarAlunoValidation,
    validateOnChange: false
  });

  function clearInput(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  const cadastrarAluno = async (aluno: CadastrarAlunoRequest) => {
    const response = await cadastrarFichaAluno(aluno);
    if (response?.status === 201) {
      alert('Aluno cadastrado com sucesso!');
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
        <Typography sx={sxTitle}>Cadastrar um aluno</Typography>
        <form onSubmit={formik.handleSubmit} className="width-100">
          <Box sx={sxFormBox}>
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
                  inputProps={{ maxLength: 9 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.nome}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Email</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='email'
                  placeholder='Digite o email'
                  type={'text'}
                  value={formik.values.email}
                  onChange={(e) => { formik.setFieldValue('email', e.target.value) }}
                  name='email'
                  error={!!formik.errors.email}
                  maxRows={1}
                  inputProps={{ maxLength: 30 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.email}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Telefone</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='telefone'
                  type={'text'}
                  placeholder='Digite o telefone'
                  value={formik.values.telefone}
                  onChange={(e) => { handleInputChange(e, 'telefone', cellPhoneMask, formik) }}
                  name='telefone'
                  error={!!formik.errors.telefone}
                  maxRows={1}
                  inputProps={{ maxLength: 15 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.telefone}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>Matricula</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='matricula'
                  placeholder='Digite a matricula'
                  type={'text'}
                  value={formik.values.matricula}
                  onChange={(e) => { formik.setFieldValue('matricula', e.target.value) }}
                  name='matricula'
                  error={!!formik.errors.matricula}
                  maxRows={1}
                  inputProps={{ maxLength: 10 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.matricula}</Typography>
            </Box>
            <Box sx={sxLabeledOutlinedInput}>
              <Typography component='label' sx={sxLabel}>CPF</Typography>
              <Box display={'flex'} flexDirection={'row'}>
                <OutlinedInput
                  id='cpf'
                  placeholder='Digite o CPF'
                  type={'text'}
                  value={formik.values.cpf}
                  onChange={(e) => { handleInputChange(e, 'cpf', cpfMask, formik) }}
                  name='cpf'
                  error={!!formik.errors.cpf}
                  maxRows={1}
                  inputProps={{ maxLength: 14 }}
                  sx={sxInputSmall}
                />
              </Box>
              <Typography sx={sxFormError}>{formik.errors.cpf}</Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={sxButton}
            >
              <Typography>CADASTRAR</Typography>
            </Button>
            <BackButton/>
          </Box>
        </form>
      </div>
    </>
  )
}

export default CadastroAlunos;