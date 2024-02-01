import React from 'react'
import '../stylesheet/buttonClear.css'

function ButtonClear(props) {
  return (
    <div className='btn-clear' onClick={props.manejarClic}>
        CLEAR
    </div>
    )
}
export default ButtonClear;