import { useState } from 'react';
import '../App.css';

const Ex7: React.FC = () => {

  const [valor1, setValor1] = useState<number>(0);
  const [valor2, setValor2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>();

  const operate = (operation: string) => {
    let result: number | null = null;

    switch (operation) {
      case "sum":
        result = valor1 + valor2;
        break;
      case "subtraction":
        result = valor1 - valor2;
        break;
      case "multiplicate":
        result = valor1 * valor2;
        break;
      case "division":
        if (valor2 !== 0) {
          result = valor1 / valor2;
        } else {
          alert("Divisão por zero não é permitida.");
          return;
        }
        break;
      default:
        console.error("Operação inválida");
        return;
    }

    setResultado(Number(result));
  }

  return (
    <div className='exercise-container'>
      <div className='labeled-input'>
        <span>Valor1: &nbsp;</span>
        <input
          id='valor1'
          type="text"
          value={valor1}
          onChange={(e) => setValor1(Number(e.target.value))}
          placeholder="Digite o primeiro numero"
        />
      </div>
      <div className='labeled-input'>
        <span>Valor2: &nbsp;</span>
        <input
          id='valor2'
          type="text"
          value={valor2}
          onChange={(e) => setValor2(Number(e.target.value))}
          placeholder="Digite o segundo numero"
        />
      </div>
      <div className='labeled-input'>
        <span>Resultado: &nbsp;</span>
        <input
          type="text"
          value={resultado}
          placeholder="Resultado (quando houver)"
        />
      </div>
      <div className='buttons-holder'>
        <button onClick={() => operate("sum")}>+</button>
        <button onClick={() => operate("subtraction")}>-</button>
        <button onClick={() => operate("multiplicate")}>*</button>
        <button onClick={() => operate("division")}>/</button>
      </div>
    </div>
  )
}

export default Ex7