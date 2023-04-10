import React from 'react'
import freecodecamplogo from '../imagenes/freecodecamp-logo.png'

function LogoFreeCodeCamp() {

    return (
        <div className='freecodecamp-logo-contendedor' >
        <img src={freecodecamplogo}
             className='freecodecamp-logo' 
             alt='FreeCodeCamp Logo' /> 
      </div>
    )

};


export default LogoFreeCodeCamp;