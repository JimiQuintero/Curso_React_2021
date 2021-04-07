import React from 'react';

const Propiedades = (props) => {
  return ( 
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre +" "+ props.objeto.apellido + " - " + props.objeto.email}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div> 
    );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props"
}
 
export default Propiedades;