import * as Yup from 'yup';
import { cpfValidator } from '../../../utils/CpfValidator';

export const CadastrarAlunoValidation = Yup.object().shape({
  nome: Yup.string()
    .required('Campo nome é obrigatório'),
  email: Yup.string()
    .required('Campo email é obrigatório'),
  telefone: Yup.string()
    .required('Campo telefone é obrigatório'),
  matricula: Yup.string()
    .required('Campo matrícula é obrigatório'),
  cpf: Yup.string().test('cpf-valid', 'CPF inválido ou incorreto', function (value) {
    return cpfValidator(value || '');
  }).required('CPF inválido (obrigatório)')
})
