import React, { useEffect, useState } from 'react';
import '../App.css';

const Ex6: React.FC = () => {
  const [table, setTable] = useState<number[][]>([]);

  function generateRandomTable() {
    const table = [];
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        row.push(Math.floor(Math.random() * 100)); // Gera um número aleatório entre 0 e 99
      }
      table.push(row);
    }
    return table;
  }

  useEffect(() => {
    const newTable = generateRandomTable();
    setTable(newTable);
  }, []); // O array vazio como segundo argumento garante que o efeito seja executado apenas uma vez, após o primeiro render

  return (
    <div className='exercise-container'>
      <h2>Tabela de 4x4 Números Inteiros Aleatórios</h2>
      <table>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ex6;