import React, { Component } from 'react';//
import logo from './logo.svg';//importamos logo
import './App.css';//estilos
import Navigation from './components/Navigation';//importamos el 
//para crear componentes tenemos que usar clases
class App extends Component {//creamos un componente heredeando
  render() {
    return (
      <div className="App">        
          <Navigation titulo="Mi primera navegacion - Tareas"/>          
          <img src={logo} className="App-logo" alt="logo" />          
      </div>
    );
  }
}

export default App;
