import React, { Component } from 'react';

class Componente extends Component {
  render() {
    return <h2>Hola soy un Componente basado en clases con extension JSX y tengo un {this.props.msg}</h2>
  }
}

export default Componente;