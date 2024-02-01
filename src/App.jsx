import './App.css';
import Button from './Components/Button';
import Pantalla from './Components/Pantalla';
import ButtonClear from './Components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = ()=>{
    if (input){
      setInput(evaluate(input));
    }else{
      Swal.fire({
        title : "Error campo vacío",
        icon : 'error'
      })
    }
    
  };




  return (
    <>
      <div className="container">
        <div className="title">
          <h1>CALCULADORA</h1>
        </div>
        <div className="contenedor-calculadora">
          <Pantalla input={input}/>
          <div className="row">
            <Button manejarClic={agregarInput}>1</Button>
            <Button manejarClic={agregarInput}>2</Button>
            <Button manejarClic={agregarInput}>3</Button>
            <Button manejarClic={agregarInput}>+</Button>
          </div>
          <div className="row">
            <Button manejarClic={agregarInput}>4</Button>
            <Button manejarClic={agregarInput}>5</Button>
            <Button manejarClic={agregarInput}>6</Button>
            <Button manejarClic={agregarInput}>-</Button>
          </div>
          <div className="row">
            <Button manejarClic={agregarInput}>7</Button>
            <Button manejarClic={agregarInput}>8</Button>
            <Button manejarClic={agregarInput}>9</Button>
            <Button manejarClic={agregarInput}>*</Button>
          </div>
          <div className="row">
            <Button manejarClic={calcularResultado}>=</Button>
            <Button manejarClic={agregarInput}>0</Button>
            <Button manejarClic={agregarInput}>.</Button>
            <Button manejarClic={agregarInput}>/</Button>
          </div>
          <div className="row">
            <ButtonClear manejarClic={()=> setInput('')}>Clear
            </ButtonClear>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
