export interface CadastrarLivroRequest {
  codigoLivro: number | string,
  nome: string,
  autor: string,
  editora: string,
  ano: number | string,
  categoria: string,
  imagemLivro: string,
  status: string
}