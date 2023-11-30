
import { useState } from 'react'
import './App.css'
import { Title, Input, Line } from './Styles/styles'

function App() {
  const [result, setResult] = useState('');

  const getValue = (value) => {
    setResult(result.concat(value));
  };

  //utilizando eval para ser interpretar a operação
  const calc = () => {
    setResult(eval(result).toString());
  };

  const reset = () => {
    setResult('')
  }


  return (
    <>

      <Title>SamuCalcula</Title>
      <Input>
        <Line> {result}</Line>
        <Line>
          <button onClick={() => getValue('1')}>1</button>
          <button onClick={() => getValue('2')}>2</button>
          <button onClick={() => getValue('3')}>3</button>
          <button onClick={() => getValue("+")}>+</button>
        </Line>
        <Line>
          <button onClick={() => getValue('4')}>4</button>
          <button onClick={() => getValue('5')}>5</button>
          <button onClick={() => getValue('6')}>6</button>
          <button onClick={() => getValue("-")}>-</button>
        </Line>
        <Line>
          <button onClick={() => getValue('7')}>7</button>
          <button onClick={() => getValue('8')}>8</button>
          <button onClick={() => getValue('9')}>9</button>
          <button onClick={() => getValue("*")}>*</button>
        </Line>
        <Line>




        </Line>
        <Line>
          <button onClick={() => getValue('0')}>0</button>
          <button onClick={reset}>AC</button>
          <button onClick={() => getValue("/")}>/</button>
          <button id='result' onClick={calc}>=</button>
        </Line>
      </Input>


    </>
  )
}

export default App
