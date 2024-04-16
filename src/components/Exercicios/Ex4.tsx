import React, { useState } from 'react';
import '../../App.css';

const Ex4: React.FC = () => {
  const [n, setN] = useState(0);
  const [result, setResult] = useState(0);

  function fibonacci(n: number) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a;
      a = b;
      b = temp + b;
    }
    return b;
  }

  const handleCalculate = () => {
    const fibResult = fibonacci(n);
    setResult(fibResult);
  };

  return (
    <div className='exercise-container'>
      <h2>Calcular o n-ésimo elemento da sequência de Fibonacci</h2>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
        placeholder="Digite o valor de n"
      />
      <button onClick={handleCalculate}>Calcular</button>
      {result > 0 && <p>O {n}-ésimo elemento da sequência de Fibonacci é: {result}</p>}
    </div>
  );
};

export default Ex4;