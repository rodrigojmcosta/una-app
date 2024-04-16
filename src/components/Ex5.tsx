 import React, { useState } from 'react';
 import '../App.css';
  
 const Ex5: React.FC = () => {
  const [n, setN] = useState(0);
  const [sequence, setSequence] = useState<number[]>([]);

  function fibonacciSequence(n: number) {
    if (n <= 0) return [];
    let sequence = [1, 1];
    for (let i = 2; i < n; i++) {
       sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
   }
  
  const handleCalculate = () => {
     const fibSequence = fibonacciSequence(n);
     setSequence(fibSequence);
  };
  
  return (
     <div className='fibonacci-table-container'>
       <h2>Sequência de Fibonacci</h2>
       <input
         type="number"
         value={n}
         onChange={(e) => setN(parseInt(e.target.value))}
         placeholder="Digite o valor de n"
       />
       <button onClick={handleCalculate}>Calcular</button>
       <table>
         <thead>
           <tr>
             <th>Índice</th>
             <th>Elemento</th>
           </tr>
         </thead>
         <tbody>
           {sequence.map((value, index) => (
             <tr key={index}>
               <td>{index + 1}</td>
               <td>{value}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
  );
 };
  
 export default Ex5;