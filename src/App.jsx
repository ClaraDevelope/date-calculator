import './App.css'
import Calculator from './components/Calculator/Calculator'
import Timer from './components/Timer/Timer'
import useTime from './customHooks/useTime'

// En el componente App.jsx vamos a tener obligatoriamente el uso de un customHook, este customHook se irá actualizando cada segundo, obtendrá la fecha actual y la guardará, posteriormente utilizaremos la respuesta de ese estado del customHook para enviárselo a un componente hijo de App mediante props, se puede llamar Timer y este únicamente recibirá la fecha y la pintará. Para obtener una fecha en JavaScript podemos utilizar new Date(). Para utilizar un formato de horas:minutos:segundos podemos utilizar el método .toLocaleTimeString() al pintar el dato utilizando el estado donde está guardada la información de new Date()

function App() {
  const time = useTime()
  return (
    <>
      <Timer time={time} />
      <Calculator />
    </>
  )
}

export default App
