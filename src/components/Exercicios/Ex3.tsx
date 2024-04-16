import React, { useState } from 'react';
import '../../App.css';

const Ex3: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const verificarCampos = () => {
    let mensagem: string = '';
    if (!nome) {
      mensagem += 'Preencha o nome ';
    }
    if (!endereco) {
      mensagem += 'Preencha o endereco ';
    }
    if (!telefone) {
      mensagem += 'Preencha o telefone ';
    }
    if (!email) {
      mensagem += 'Preencha o email';
    }
    setMensagem(mensagem);
    if (nome && endereco && telefone && email) {
      setMensagem('Todos os campos foram preenchidos corretamente.');
    }
  };

  return (
    <div className='exercise-container'>
      <form className='form-ex3'>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </label>
        <label>
          Telefone:
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="button" onClick={verificarCampos}>Verificar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Ex3;