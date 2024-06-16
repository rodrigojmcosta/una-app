import { useState } from 'react';
import '../../../index.css';
import Line from './Line.jsx';

function Ex1() {
  function handleClick() {
    setHidden(!hidden);
  }
  const [hidden, setHidden] = useState(true);
  let tamanhos = [];
  for (var i = 1; i <= 10; i++) {
    tamanhos.push(i * 5);
  }
  let lista: any[] = [];
  tamanhos.forEach((tam, index) => {
    lista.push(<Line tam={tam * 2} index={index * 2}></Line>)
  })
  return (
    <div className="m1">
      <button className='m1' onClick={handleClick}>Clique aqui!</button>
      <table className='m1' hidden={hidden}>
        {lista}
      </table>
    </div>
  );
}
export default Ex1;