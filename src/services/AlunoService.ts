import { apiBase } from "../config/api";
import { CadastrarAlunoRequest } from "../interfaces/entities/Aluno/CadastrarAlunoRequest";
import { Response } from "../interfaces/entities/Response";

export const cadastrarFichaAluno = async (alunoData: CadastrarAlunoRequest): Promise<Response | null> => {
  try {
    const response = await apiBase.post('/alunos', {
      nome: alunoData.nome,
      email: alunoData.email,
      telefone: alunoData.telefone,
      matricula: alunoData.matricula,
      cpf: alunoData.cpf
    });
    return response;
  } catch (error: any) {
    console.log({ error });
    return error.response;
  }
};