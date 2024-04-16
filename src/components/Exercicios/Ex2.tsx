import { useState } from 'react';
import '../../App.css';

const Ex2: React.FC = () => {
  const [rows, setRows] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const generateTable = () => {
    const tableRows = [];

    for (let i = 0; i < rows; i++) {
      tableRows.push(
        <tr key={i} style={{ border: '1px solid' }}>
          <td style={{ border: '1px solid' }}>{i + 1}</td>
          <td style={{ border: '1px solid' }}>{text}</td>
        </tr>
      );
    }

    setTableRows(tableRows);
  };

  const [tableRows, setTableRows] = useState<JSX.Element[]>([]);

  return (
    <div className='exercise-container'>
      <div style={{ alignSelf: 'flex-start' }}>
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          placeholder="Digite o número de linhas"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite o texto"
        />
        <button onClick={generateTable}>Gerar Tabela</button>
      </div>
      {!!tableRows.length &&
        <table style={{ border: '1px solid' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid' }}>Índice</th>
              <th style={{ border: '1px solid' }}>Texto</th>
            </tr>
          </thead>
          <tbody style={{ border: '1px solid' }}>{tableRows}</tbody>
        </table>}
    </div>
  );
}

export default Ex2