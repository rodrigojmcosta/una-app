import { apiBase } from "../config/api";
import { CadastrarLivroRequest } from "../interfaces/entities/Livro/CadastrarLivroRequest";
import { Response } from "../interfaces/entities/Response";

export const cadastraLivro = async (livroData: CadastrarLivroRequest): Promise<Response | null> => {
  try {
    const response = await apiBase.post('/livros', {
      codigoLivro: livroData.codigoLivro,
      nome: livroData.nome,
      autor: livroData.autor,
      editora: livroData.editora,
      ano: livroData.ano,
      categoria: livroData.categoria,
      imagemLivro: livroData.imagemLivro,
      dataReserva: null,
      dataDevolucao: null,
      status: livroData.status,
      cpfAluno: null
    });
    return response;
  } catch (error: any) {
    console.log({ error });
    return error.response;
  }
};