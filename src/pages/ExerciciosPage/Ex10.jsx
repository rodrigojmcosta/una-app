import React, { useState } from 'react';
import '../../index.css';

function Ex10() {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState('');
    const [operator, setOperator] = useState('');
    const [waitingForNext, setWaitingForNext] = useState(false);

    const handleNumberClick = (num) => {
        if (display === '0' || waitingForNext) {
            setDisplay(num);
            setWaitingForNext(false);
        } else {
            setDisplay(display + num);
        }
    };

    const handleDecimalClick = () => {
        if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handleOperatorClick = (op) => {
        if (prevValue === '') {
            setPrevValue(display);
        } else {
            calculate();
        }
        setOperator(op);
        setWaitingForNext(true);
    };

    const calculate = () => {
        let result;
        const current = parseFloat(display);
        const prev = parseFloat(prevValue);
        if (!isNaN(prev) && !isNaN(current)) {
            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    break;
            }
            setDisplay(result.toString());
            setPrevValue('');
        }
    };

    const handleEqualsClick = () => {
        calculate();
        setOperator('');
        setWaitingForNext(true);
    };

    const handleClearEntry = () => {
        setDisplay('0');
        setWaitingForNext(false);
    };

    const handleClearAll = () => {
        setDisplay('0');
        setPrevValue('');
        setOperator('');
        setWaitingForNext(false);
    };

    const handleSignChange = () => {
        if (display !== '0') {
            setDisplay((parseFloat(display) * -1).toString());
        }
    };

    return (
        <div>
            <h2>Ex10)Implementar uma calculadora com React JS com funcionalidade completa</h2>
            <div className="calculator">
                <div className="display">{display}</div>
                <div className="buttons">
                    <button onClick={() => handleClearEntry()}>CE</button>
                    <button onClick={() => handleClearAll()}>C</button>
                    <button onClick={() => handleSignChange()}>+/-</button>
                    <button onClick={() => handleOperatorClick('/')}>/</button>

                    <button onClick={() => handleNumberClick('7')}>7</button>
                    <button onClick={() => handleNumberClick('8')}>8</button>
                    <button onClick={() => handleNumberClick('9')}>9</button>
                    <button onClick={() => handleOperatorClick('*')}>*</button>

                    <button onClick={() => handleNumberClick('4')}>4</button>
                    <button onClick={() => handleNumberClick('5')}>5</button>
                    <button onClick={() => handleNumberClick('6')}>6</button>
                    <button onClick={() => handleOperatorClick('-')}>-</button>

                    <button onClick={() => handleNumberClick('1')}>1</button>
                    <button onClick={() => handleNumberClick('2')}>2</button>
                    <button onClick={() => handleNumberClick('3')}>3</button>
                    <button onClick={() => handleOperatorClick('+')}>+</button>

                    <button onClick={() => handleNumberClick('0')}>0</button>
                    <button onClick={() => handleDecimalClick()}>.</button>
                    <button onClick={() => handleEqualsClick()}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Ex10;