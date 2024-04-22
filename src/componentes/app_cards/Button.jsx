// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function Button() {
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show)
    }
  return(
  <div>
    <br/>
    <button onClick={handleClick}>
        {show ?"Ocultar descripcion" : "Ver descripcion"}
        
    </button>
    { show && <h2>Este componente fue creado para ver los personajes en nuestra  base de datos 
    </h2> }
  </div>)
}

export default Button