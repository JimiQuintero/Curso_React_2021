import React, {Fragment, useState } from 'react';

const HooksContador = (props) => {
  // console.log(useState());
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1); 
  const restar = () => setContador(contador - 1); 
  
  return ( 
   <Fragment>
     <h2>Hooks - useState</h2>
     <nav>
       <button onClick= {sumar}>+</button>
       <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.title}</p>
      <h3>{contador}</h3>
   </Fragment>
   );
}

HooksContador.defaultProps = {
  title: "Clicks",
}
 
export default HooksContador;