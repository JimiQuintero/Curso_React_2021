import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    // console.log("Sumando");
    console.log(this);

    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar(e) {
    // console.log("Restando");
    // console.log(this);
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer

export class EventosES7 extends Component {
    
  state = {
      contador: 0
    }
  // Arrow function 
  sumar = (e) => {
    // console.log("Sumando");
    console.log(this);

    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar = (e) => {
    // console.log("Restando");
    // console.log(this);
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Más sobre Eventos 

// function Button(props) {
//   return (
//     <button onClick= {props.myOnClick} >Botón hecho componente</button>
//   )
// }

// const Button = (props) =>  ( <button onClick= {props.myOnClick} >Botón hecho componente</button> ); 

// Utilizando destructuración
const Button = ({myOnClick}) =>  ( <button onClick= {myOnClick} >Botón hecho componente</button> ); 
 

class MasSobreEventos extends Component {
  // Pasar parametros en un Evento 
  handleClick = (e, mensaje) => {
    console.log(e);
    // Acceder al Evento Nativo (original) de vanilla js 
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };
  render() { 
    return ( 
      <div>
        <h2>Más sobre Eventos</h2>
        <button 
        onClick= { (e) => 
          this.handleClick(e, "Hola pasando parametro desde un evento")}
        >
          Saludar
        </button>
        {/* Componente Button  */}
        {/* Evento Personalizado */}
        {/* <Button onClick= { (e) => this.handleClick(e, "Hola pasando parametro desde un evento") }/> */}
        <Button myOnClick= { (e) => this.handleClick(e, "Hola pasando parametro desde un evento") }/>
      </div>
     );
  }
}
 
export default MasSobreEventos;
