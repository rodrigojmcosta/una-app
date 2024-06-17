import * as Yup from 'yup';

export const CadastrarLivroValidation = Yup.object().shape({
  codigoLivro: Yup.string()
    .required('Código é obrigatório'),
  nome: Yup.string()
    .required('Nome é obrigatório'),
  imagemLivro: Yup.string()
    .required('Deve ser informado um link para a imagem da capa do livro.')
})
