import * as Yup from 'yup';
import { cpfValidator } from '../../../utils/CpfValidator';

export const RegistarEmprestimoValidation = Yup.object().shape({
  cpfAluno: Yup.string().test('cpf-valid', 'CPF inválido ou incorreto', function (value) {
    return cpfValidator(value || '');
  }).required('CPF inválido (obrigatório)')
})
