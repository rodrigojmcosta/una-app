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

export const reservaLivro = async (cpfAluno: string, codigoLivro: number): Promise<Response | null> => {
  try {
    const response = await apiBase.post(`/reservar/${codigoLivro}/${cpfAluno}`);
    return response;
  } catch (error: any) {
    console.log({ error });
    return error.response;
  }
};

export const getLivros = async (): Promise<Response | null> => {
  try {
    const response = await apiBase.get('/livros');
    return response;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const getLivroByCodigo = async (codigo: number): Promise<Response | null> => {
  try {
    const response = await apiBase.get(`/livros/${codigo}`);
    return response;
  } catch (error) {
    console.log({ error });
    return null;
  }
};