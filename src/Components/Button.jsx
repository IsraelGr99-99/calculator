import React from 'react'
import '../stylesheet/Button.css'

function Button(props) {
  const esOperador = valor =>{
    return isNaN(valor) && (valor != '.') && (valor != '=')
  };
  return (
    <div
    className={
      `btn-contenedor ${esOperador(props.children ? 'operador' : '')}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}
export default Button;
