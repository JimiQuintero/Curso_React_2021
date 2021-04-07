import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Componente2 from './components/Componente2'
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElemento from './components/RenderizadoElementos';
import MasSobreEventos, {EventosES6, EventosES7} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import HooksContador from './components/HooksContador';
// import ScrollHook from './components/ScrollHook';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';


function App() {
  let nombre = "Jimi";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nonmbre" />
          <h1>{nombre}</h1>
          <p>
            {auth? "El usuario esta logueado" : "El usuario No esta logueado"}
          </p>
          <p>{2 + 1}</p>
          <ul>
            {estaciones.map((el, index) =>(
              <li key={index}>{el}</li>
            ))}
          </ul>
          <p>Hello World React by Jimi Dev</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
      <section>
        <Componente msg="Mensaje con una props" />
        <hr></hr>
        <Componente2 msg="Mensaje desde una props"></Componente2>
        <hr></hr>
        <Propiedades cadena= "Esto es una cadena de string" 
                     numero= {48} 
                     arreglo= {[1, 2, 3]}
                     booleano= {true}
                     objeto= {{
                       nombre: "Jimi",
                       apellido: "Quintero",
                       email: "jimi.quintero@bigholding.com.co"
                     }}
                     funcion= {(num) => num * num}
                     elementoReact= {<i>Esto es un elemento React</i>}
                     componenteReact= {<Componente msg= "Soy un componente pasado como Props" />} />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElemento/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <HooksContador title= "Seguidores"/>
        {/* <hr/>
        <ScrollHook/> */}
        <hr/>
        <RelojHooks/>
        <hr/>
        <AjaxHooks/>
      </section>
      </header>
    </div>
    // <div>
    //   <h1>Hello agian {nombre} dev</h1>
    // </div>
  );
}

export default App;
