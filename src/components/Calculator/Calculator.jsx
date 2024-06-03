// Ahora vamos a crear un nuevo componente que será un componente Hijo de App.jsx. Le podemos llamar Calculator. No lo vamos a maquetar mucho pero vamos a hacer la funcionalidad de una calculadora de la manera más sencilla posible y
// ? sin utilizar useState.
// Funcionamiento esperado de la Calculadora
// La manera de usar esta calculadora será la siguiente:
// 1️⃣ Introduces un número en el input
// 2️⃣ Eliges una operación y automáticamente el input se limpia para que puedas escribir el segundo número
// 3️⃣ Introduces el segundo número en el input
// 4️⃣ Le das al botón "=", esto provocará varias cosas:
// - Se limpia el input
// - Se calcula el resultado
// - Se guarda el resultado en un array de históricos
// - Se muestra el resultado en último resultado
// - Se ordenan los resultados históricos mostrándolos de menor a mayor
// - Nos permite volver a repetir el proceso (limpiaremos valores)
import React, { useReducer } from 'react'
import './Calculator.css'
import { initialState, reducer } from '../../reducer/CalculatorReucer'

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleNumberInput = (number) => {
    dispatch({ type: 'INPUT_NUMBER', payload: number })
  }
  const handleOperation = (operation) => {
    dispatch({ type: 'OPERATION', payload: operation })
  }
  const handleCalculate = () => {
    dispatch({ type: 'CALCULATE' })
  }
  const handleReset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div className='calculator'>
      <input type='text' value={state.inputValue} />
      <button onClick={() => handleNumberInput('1')}>1</button>
      <button onClick={() => handleNumberInput('2')}>2</button>
      <button onClick={() => handleNumberInput('3')}>3</button>
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleNumberInput('4')}>4</button>
      <button onClick={() => handleNumberInput('5')}>5</button>
      <button onClick={() => handleNumberInput('6')}>6</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleNumberInput('7')}>7</button>
      <button onClick={() => handleNumberInput('8')}>8</button>
      <button onClick={() => handleNumberInput('9')}>9</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <button onClick={() => handleNumberInput('0')}>0</button>
      <button onClick={() => handleOperation('/')}>/</button>
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleReset}>Reset</button>
      <p>Result: {state.result}</p>
      <p>History:</p>
      <ul className='history'>
        {state.history.map((entry, index) => (
          <li key={index}>
            {entry.expression} = {entry.result}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Calculator
